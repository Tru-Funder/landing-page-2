"use client";
import { CHALLENGES } from "@/constants/compare-our-challenges";
import { RootState } from "@/store/index.store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function OneStepVerification() {
  const accountType = useSelector(
    (state: RootState) => state.challengesSlice.data.accountType
  );

  const accountSize = useSelector(
    (state: RootState) => state.challengesSlice.data.accountSize
  );

  const details = CHALLENGES[2].accountSizes[accountSize].verification;

  if (accountType !== 2) return;

  return (
    <div className="bg-[#E6F3E6] p-8 rounded-2xl">
      <div className="grid grid-cols-[auto_1fr] gap-3 items-center border-b pb-4 border-green-500">
        <span className="text-green-500 text-2xl font-semibold">1</span>
        <h4 className="font-medium text-xl">Verification</h4>
      </div>

      <p className="py-4">
        Select an account size and try to reach the profit target. Trade all
        available instruments. Subject to the rules and objectives, your trading
        style is completely up to you.
      </p>

      <div className="mt-4">
        {/* Profit Target */}
        <div className="border-t border-green-500 py-4 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          <span className="block relative w-6">
            <Image
              src={"/assets/profit.png"}
              width={100}
              height={100}
              alt="Profit Icon"
            />
          </span>

          <p>Profit Target</p>

          <span className="bg-green-500 py-1 px-3 rounded-md text-white">
            {details?.profitTarget}
          </span>
        </div>

        {/* Daily Drawdown */}
        <div className="border-t border-green-500 py-4 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          <span className="block relative w-6">
            <Image
              src={"/assets/drawdown.png"}
              width={100}
              height={100}
              alt="Profit Icon"
            />
          </span>

          <p>Daily Drawdown</p>

          <span>{details?.dailyDrawdown}</span>
        </div>

        {/* Total Drawdown */}
        <div className="border-t border-green-500 py-4 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          <span className="block relative w-6">
            <Image
              src={"/assets/profit.png"}
              width={100}
              height={100}
              alt="Profit Icon"
            />
          </span>

          <p>Total Drawdown</p>

          <span>{details?.totalDrawdown}</span>
        </div>

        {/* Time Limit */}
        <div className="border-t border-green-500 py-4 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          <span className="block relative w-6">
            <Image
              src={"/assets/profit.png"}
              width={100}
              height={100}
              alt="Profit Icon"
            />
          </span>

          <p>Time Limit</p>

          <span>{details?.timeLimit}</span>
        </div>

        {/* Payout (bi-weekly) */}
        <div className="border-t border-green-500 py-4 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          <span className="block relative w-6">
            <Image
              src={"/assets/profit.png"}
              width={100}
              height={100}
              alt="Profit Icon"
            />
          </span>

          <p>Payout (bi-weekly)</p>

          <span>{details?.payout}</span>
        </div>

        {/* Salary Per Month */}
        <div className="border-t border-green-500 py-4 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
          <span className="block relative w-6">
            <Image
              src={"/assets/profit.png"}
              width={100}
              height={100}
              alt="Profit Icon"
            />
          </span>

          <p>Salary Per Month</p>

          <span>{details?.salaryPerMonth}</span>
        </div>
      </div>
    </div>
  );
}
