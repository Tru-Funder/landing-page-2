"use client";

import React, { useState } from "react";

export default function ChangeCurrency() {
  const [currency, setCurrency] = useState<"usd" | "eur">("usd");

  const handleChangeCurrency = () => {
    currency === "usd" ? setCurrency("eur") : setCurrency("usd");
  };

  return (
    <div className="text-white grid grid-flow-col w-max items-center gap-2">
      <span className="text-2xl font-bold">USD</span>
      <button
        className="w-12 h-7 rounded-full bg-green-400 relative"
        onClick={handleChangeCurrency}
      >
        <span
          className={`w-5 h-5 rounded-full block bg-white absolute top-1/2 -translate-y-1/2 transition-all ${
            currency === "usd" ? "left-1" : "left-6"
          }`}
        ></span>
      </button>
      <span className="text-2xl font-bold">EUR</span>
      <p className="text-neutral-700 text-sm mt-1">(see pricing in)</p>
    </div>
  );
}
