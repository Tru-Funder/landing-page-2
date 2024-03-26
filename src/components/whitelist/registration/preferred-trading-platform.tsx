"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function PreferredTradingPlatform() {
  const [selectedPlatform, setSelectedPlatform] = useState<
    "" | "MT4" | "MT5" | "CT"
  >("");

  return (
    <div className="mt-16 sm:mt-20">
      <p className="text-white text-lg xs:text-xl sm:text-2xl">
        Preferred Trading Platform:
      </p>
      <input
        type="text"
        name="preferredPlatform"
        value={selectedPlatform}
        readOnly
        required
        className="hidden"
      />
      <div className="grid lg:grid-cols-3 lg:w-max gap-5 lg:gap-12 mt-5 sm:text-xl">
        <div className="grid grid-cols-[auto_1fr] items-center gap-5">
          <button
            type="button"
            onClick={() => setSelectedPlatform("MT4")}
            className="block w-6 h-6 rounded-full bg-white border-2 border-green-300 p-1"
          >
            <span
              className={`w-full h-full rounded-full block ${
                selectedPlatform === "MT4" && "bg-green-300"
              }`}
            ></span>
          </button>
          <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-2 px-3 text-sm bg-[#B0DAB2] font-medium items-center gap-2">
            <span className="block relative w-6">
              <Image
                src={"/assets/meta-trader-4.png"}
                width={100}
                height={100}
                alt="MetaTrader 4 Logo"
              />
            </span>
            <p>MetaTrader 4</p>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] items-center gap-5">
          <button
            type="button"
            onClick={() => setSelectedPlatform("MT5")}
            className="block w-6 h-6 rounded-full bg-white border-2 border-green-300 p-1"
          >
            <span
              className={`w-full h-full rounded-full block ${
                selectedPlatform === "MT5" && "bg-green-300"
              }`}
            ></span>
          </button>
          <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-2 px-3 text-sm bg-[#FED202] font-medium items-center gap-2">
            <span className="block relative w-6">
              <Image
                src={"/assets/meta-trader-5.png"}
                width={100}
                height={100}
                alt="MetaTrader 5 Logo"
              />
            </span>
            <p>MetaTrader 5</p>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] items-center gap-5">
          <button
            type="button"
            onClick={() => setSelectedPlatform("CT")}
            className="block w-6 h-6 rounded-full bg-white border-2 border-green-300 p-1"
          >
            <span
              className={`w-full h-full rounded-full block ${
                selectedPlatform === "CT" && "bg-green-300"
              }`}
            ></span>
          </button>
          <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-2 px-3 text-sm bg-[#2F61DF] text-white font-medium items-center gap-2">
            <span className="block relative w-6">
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
    </div>
  );
}
