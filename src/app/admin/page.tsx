import Table from "@/components/admin/whitelist/table";
import React from "react";

export default function page() {
  return (
    <main className="bg-white grid grid-rows-[auto_1fr] min-h-screen py-10 gap-10 layout-space">
      <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-white">
        <span className="text-yellow-500">Admin</span>{" "}
        <span className="text-neutral-800">Whitelist</span>
      </h2>

      <Table />
    </main>
  );
}
