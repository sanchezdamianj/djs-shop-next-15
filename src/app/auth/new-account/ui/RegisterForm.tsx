"use client";

import { login } from "@/actions/auth/login";
import { registerUser } from "@/actions/auth/register";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [errorMessage, setErrorMessage] = useState<string|undefined>('');

  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { name, email, password } = data;

    const response = await registerUser(name, email, password);

    if (!response?.ok) {
       setErrorMessage(response?.message);
       return;
    }   

    await login(email.toLowerCase(), password);
    router.replace("/");
    // window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="name">Full Name</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.name?.type === "required",
        })}
        type="text"
        {...register("name", {
          required: true,
          minLength: 2,
        })}
      />

      <label htmlFor="email">Email</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.email?.type === "required",
        })}
        type="email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />

      <label htmlFor="password">Password</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.password?.type === "required",
        })}
        type="password"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />

      <p className="text-red-500">{errorMessage}</p>

      <button className="btn-primary">Create new account</button>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
