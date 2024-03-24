import Image from "next/image";
import React from "react";

export default function PreferredTradingPlatform() {
  return (
    <div className="mt-16 sm:mt-20">
      <p className="text-white text-lg xs:text-xl sm:text-2xl">
        Preferred Trading Platform:
      </p>
      <div className="grid lg:grid-flow-col gap-5 mt-5 sm:text-xl">
        <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-3 px-4 bg-[#B0DAB2] font-medium items-center gap-4">
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

        <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-3 px-4 bg-[#FED202] font-medium items-center gap-4">
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

        <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-3 px-4 bg-[#2F61DF] text-white font-medium items-center gap-4">
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
