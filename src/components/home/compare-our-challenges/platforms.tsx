import Image from "next/image";
import React from "react";

export default function Platforms() {
  return (
    <div className="w-80 rounded-2xl bg-[#131B35] p-10 grid gap-5 content-center">
      <p className="text-white font-medium text-2xl pb-5 border-b border-[#E6F3E6]">
        Choose Your Platform
      </p>

      <div className="grid gap-3">
        <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-3 px-4 bg-[#B0DAB2] text-xl font-medium items-center gap-4">
          <span className="block relative w-8">
            <Image
              src={"/assets/meta-trader-4.png"}
              width={100}
              height={100}
              alt="MetaTrader 4 Logo"
            />
          </span>
          <p>MetaTrader 4</p>
        </div>

        <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-3 px-4 bg-[#FED202] text-xl font-medium items-center gap-4">
          <span className="block relative w-8">
            <Image
              src={"/assets/meta-trader-5.png"}
              width={100}
              height={100}
              alt="MetaTrader 5 Logo"
            />
          </span>
          <p>MetaTrader 5</p>
        </div>

        <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-3 px-4 bg-[#2F61DF] text-white text-xl font-medium items-center gap-4">
          <span className="block relative w-8">
            <Image
              src={"/assets/c-trader.png"}
              width={100}
              height={100}
              alt="C Trader Logo"
            />
          </span>
          <p>C Trader</p>
        </div>
      </div>
    </div>
  );
}
