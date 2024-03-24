"use client";

import { CHALLENGES } from "@/constants/compare-our-challenges";
import { RootState } from "@/store/index.store";
import {
  setAccountSize,
  setAccountType,
} from "@/store/slices/compare-our-challenges";
import { Button } from "@/ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SelectAccountType() {
  const dispatch = useDispatch();

  const accountType = useSelector(
    (state: RootState) => state.challengesSlice.data.accountType
  );

  const handleSelectAccountType = (type: number) => {
    dispatch(setAccountType(type));
    dispatch(setAccountSize(0));
  };

  return (
    <div className="grid gap-3">
      <h3 className="font-semibold text-white text-2xl lg:text-3xl">
        Select account type
      </h3>
      <div className="grid grid-flow-col bg-[#E6F3E6]">
        {CHALLENGES.map((challenge, i) => (
          <button
            key={i}
            onClick={() => handleSelectAccountType(i)}
            className={`p-3 font-semibold ${
              CHALLENGES[accountType].accountType === challenge.accountType
                ? "bg-[#008905] text-white"
                : "text-[#008905]"
            }`}
          >
            {challenge.accountType}
          </button>
        ))}
      </div>
    </div>
  );
}
