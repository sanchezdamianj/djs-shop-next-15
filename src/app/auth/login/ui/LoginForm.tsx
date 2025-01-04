"use client";

import Link from "next/link";

import { authenticate } from "@/actions/auth/login";
import clsx from "clsx";
import { useActionState, useEffect } from "react";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {
  const [status,formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  // const router = useRouter();
  
  useEffect(() => {
    
    if ( status === "Success" ) {
      // router.replace("/");

      window.location.replace("/");
    }
  }, [ status ]);

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password"
          name="password"
        />

        {status as string && (
          <div className="flex items-center space-x-2 mb-8">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{status as string}</p>
          </div>
        )}

        <button 
          type="submit" 
          className={ clsx({
            'btn-primary': !isPending,
            'btn-disabled': isPending
          })} 
          aria-disabled={isPending}
          disabled={isPending}
          >
          Log in
         
        </button>
        {/* divisor line */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/new-account" className="btn-secondary text-center">
          Create new account
        </Link>
      </div>
    </form>
  );
};
