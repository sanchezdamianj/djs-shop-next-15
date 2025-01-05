"use server";
import bcryptjs from "bcryptjs";

import prisma from "@/lib/prisma";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password),
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    });

    return {
        ok: true,
        user,
        message: "User created successfully"
    }
  } catch (error) {
    console.log(error);
  }
};
