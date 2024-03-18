import Image from "next/image";
import React from "react";

export default function ResetAccount() {
  return (
    <div className="bg-[linear-gradient(160deg,_#42CF46,_#ffffff5c,_transparent)] p-1 rounded-2xl">
      <div className="text-white w-full bg-[#41465C] min-h-80 p-6 rounded-2xl content-start justify-items-center grid gap-4 text-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
        <span className="relative w-20">
          <Image
            src={"/assets/reset.svg"}
            width={1000}
            height={1000}
            alt="Reset Account Icon"
          />
        </span>
        <h3 className="text-2xl font-bold max-w-xl">
          Leverage our account reset feature to recover from a daily drawdown
          and regain control of your trading performance.
        </h3>
        <p className="text-xs font-light">
          (only available for 25k-200k) acct sizes
        </p>
      </div>
    </div>
  );
}
