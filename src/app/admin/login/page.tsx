import Form from "@/components/admin/login/form";
import React from "react";

export default function Page() {
  return (
    <main className="bg-[#070E2A] min-h-screen grid items-center layout-space">
      <div className="grid gap-20">
        <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-white">
          <span className="text-yellow-500">Admin</span> Login
        </h2>
        <Form />
      </div>
    </main>
  );
}
