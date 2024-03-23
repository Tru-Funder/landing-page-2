"use client";

import { CHALLENGES } from "@/constants/compare-our-challenges";
import { RootState } from "@/store/index.store";
import { Button } from "@/ui";
import React from "react";
import { useSelector } from "react-redux";

export default function RegistrationFee() {
  const accountType = useSelector(
    (state: RootState) => state.challengesSlice.data.accountType
  );

  const accountSize = useSelector(
    (state: RootState) => state.challengesSlice.data.accountSize
  );

  return (
    <div className="bg-[#E6F3E6] rounded-2xl text-center p-10 grid gap-5">
      <p className="text-2xl font-medium">Registration Fee</p>
      <p className="text-[#008905] font-semibold text-6xl">
        {CHALLENGES[accountType].accountSizes[accountSize].registrationFee}
      </p>
      <Button variant="contained" className="mx-auto text-2xl">
        Get Funded
      </Button>
    </div>
  );
}
