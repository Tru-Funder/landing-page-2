"use client";

import React from "react";
import { ACCOUNT_SIZES } from "@/constants/compare-our-challenges";
import { RootState } from "@/store/index.store";
import { setAccountSize } from "@/store/slices/compare-our-challenges";
import { useDispatch, useSelector } from "react-redux";

export default function AccountSizes() {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state: RootState) => state.compareOurChallengesSlice.data
  );

  const handleChangeTab = (t: string) => {
    dispatch(setAccountSize(t));
  };

  return (
    <div className="grid grid-flow-col gap-8 w-max mt-10 mx-auto">
      {ACCOUNT_SIZES.map((t, i) => (
        <button
          key={i}
          className={`rounded-md font-semibold text-black w-24 py-2 transition-all ${
            currentTab === t.title
              ? "bg-green-300"
              : "bg-[#E6F3E6] hover:bg-green-100 border-none"
          } `}
          onClick={() => handleChangeTab(t.title)}
        >
          {t.title}
        </button>
      ))}
    </div>
  );
}
