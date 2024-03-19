import Image from "next/image";
import React from "react";

export default function SalaryRewardSystem() {
  return (
    <div className="bg-[linear-gradient(160deg,_#42CF46,_#ffffff5c,_transparent)] p-1 rounded-2xl">
      <div className="text-white w-full bg-[#41465C] min-h-80 p-6 rounded-2xl content-start justify-items-center grid gap-4 text-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
        <span className="relative w-20">
          <Image
            src={"/assets/srs.svg"}
            width={1000}
            height={1000}
            alt="Salary Reward System Icon"
          />
        </span>
        <h3 className="text-2xl font-bold">Salary Reward System (SRS)</h3>
        <p className="max-w-md text-lg">
          Earn a whooping 1% of any account size, when you have made a minimum
          consistent withdrawal up to 3 times!
        </p>
        <p className="text-lg font-light">(T&C&apos;s apply)</p>
      </div>
    </div>
  );
}
