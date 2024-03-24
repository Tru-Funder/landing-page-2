"use client";

import { CHALLENGES } from "@/constants/compare-our-challenges";
import { RootState } from "@/store/index.store";
import { setAccountSize } from "@/store/slices/compare-our-challenges";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SelectAccountSize() {
  const dispatch = useDispatch();

  const accountType = useSelector(
    (state: RootState) => state.challengesSlice.data.accountType
  );

  const accountSize = useSelector(
    (state: RootState) => state.challengesSlice.data.accountSize
  );

  const handleSelectAccountSize = (size: number) => {
    dispatch(setAccountSize(size));
  };

  return (
    <div className="grid gap-3">
      <h3 className="font-semibold text-white text-2xl lg:text-3xl">
        Select account size
      </h3>
      <div className="hidden xs:grid grid-flow-col bg-[#E6F3E6]">
        {CHALLENGES[accountType].accountSizes.map((size, i) => (
          <button
            key={i}
            onClick={() => handleSelectAccountSize(i)}
            className={`p-3 font-semibold ${
              CHALLENGES[accountType].accountSizes[accountSize].size ===
              size.size
                ? "bg-[#008905] text-white"
                : "text-[#008905]"
            }`}
          >
            {size.size}
          </button>
        ))}
      </div>

      <div className="grid grid-flow-col bg-[#E6F3E6] xs:hidden">
        {CHALLENGES[accountType].accountSizes.slice(0, 4).map((size, i) => (
          <button
            key={i}
            onClick={() => handleSelectAccountSize(i)}
            className={`p-3 font-semibold ${
              CHALLENGES[accountType].accountSizes[accountSize].size ===
              size.size
                ? "bg-[#008905] text-white"
                : "text-[#008905]"
            }`}
          >
            {size.size}
          </button>
        ))}
      </div>

      <div className="grid grid-flow-col w-[75%] bg-[#E6F3E6] xs:hidden">
        {CHALLENGES[accountType].accountSizes
          .slice(4, CHALLENGES[accountType].accountSizes.length)
          .map((size, i) => (
            <button
              key={i}
              onClick={() => handleSelectAccountSize(i + 4)}
              className={`p-3 font-semibold ${
                CHALLENGES[accountType].accountSizes[accountSize].size ===
                size.size
                  ? "bg-[#008905] text-white"
                  : "text-[#008905]"
              }`}
            >
              {size.size}
            </button>
          ))}
      </div>
    </div>
  );
}
