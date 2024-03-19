import React from "react";
import DropDown from "./drop-down";

export default function GettingStarted() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container grid gap-3 text-white text-center">
        <h2 className="text-3xl font-bold">Getting Started</h2>

        <p className="text-neutral-700 max-w-xl mx-auto">
          Direct funding with our express trading account, you can bypass
          lengthy evaluation phases and access direct funding.
        </p>

        <div className="grid gap-8 mt-10">
          <DropDown title="General Description" />
          <DropDown title="Instruction Guides" />
          <DropDown title="Policies, guidelines and licenses" />
        </div>
      </div>
    </section>
  );
}
