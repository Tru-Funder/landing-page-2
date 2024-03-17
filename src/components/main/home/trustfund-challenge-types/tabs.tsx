"use client";

import { TRU_FUNDER_CHALLENGE_TYPES } from "@/constants/trufunder-challenge-types";
import { RootState } from "@/store/index.store";
import { setTruFunderChallengeType } from "@/store/slices/trufunder-challenge-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Tabs() {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state: RootState) => state.truFunderChallengeTypesSlice.data
  );

  const handleChangeTab = (t: string) => {
    dispatch(setTruFunderChallengeType(t));
  };

  return (
    <div className="bg-green-50 px-3  py-2 rounded-3xl grid grid-flow-col gap-4 mt-10 max-w-lg mx-auto">
      {TRU_FUNDER_CHALLENGE_TYPES.map((t, i) => (
        <button
          key={i}
          className={`rounded-full font-semibold px-6 py-2 transition-all ${
            currentTab === t.title
              ? "border border-white bg-green-100 text-black"
              : "text-green-600 hover:bg-green-100 border-none"
          } `}
          onClick={() => handleChangeTab(t.title)}
        >
          {t.title}
        </button>
      ))}
    </div>
  );
}
