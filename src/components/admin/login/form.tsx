"use client";

import { Button } from "@/ui";
import React, { FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useDispatch } from "react-redux";
import { setAdmin } from "@/store/slices/admin";
import { useRouter } from "next/navigation";

export default function Form() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email") as string;
    const password = data.get("password") as string;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setAdmin(user.email));
        router.push("/admin");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-[#131B35] max-w-lg w-full mx-auto p-8 rounded-lg grid gap-10"
    >
      <input
        type="text"
        placeholder="Email"
        name="email"
        required
        className="w-full py-4 text-lg sm:text-xl text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="w-full py-4 text-lg sm:text-xl text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
      />

      <Button variant="contained" className="py-4 text-lg ">
        Login
      </Button>
    </form>
  );
}
