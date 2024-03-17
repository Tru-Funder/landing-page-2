import React from "react";
import ChangeCurrency from "./change-currency";
import AccountSizes from "./account-sizes";

export default function CompareOurChallenges() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container">
        <h2 className="text-5xl font-bold text-white text-center">
          <span className="text-yellow-600">Compare</span> Our Challenges
        </h2>
        <p className="text-center text-2xl text-white mt-8">
          Choose Your Preferred Account
        </p>

        <AccountSizes />

        <div className="max-w-3xl mt-10 mx-auto grid gap-4">
          {/* headers */}
          <div className="grid grid-cols-4 gap-4 py-2 justify-items-center bg-white rounded-3xl">
            <p className="text-green-600">Account size</p>
            <p className="text-green-600">Evaluation</p>
            <p className="text-green-600">Express</p>
            <p className="text-green-600">One-step</p>
          </div>

          <div className="grid grid-cols-4 gap-4 py-2">
            {/* Account Size */}
            <div className="text-white grid gap-8 px-5 py-8 bg-[#131B35] text-center rounded-3xl">
              <div>
                <p>Daily Drawdown</p>
              </div>
              <div>
                <p>Total Drawdown</p>
              </div>
              <div>
                <p>Profit Target</p>
                <p>(Phase 1)</p>
              </div>
              <div>
                <p>Profit Target</p>
                <p>(Phase 2)</p>
              </div>
              <div>
                <p>Time Limit</p>
              </div>
              <div>
                <p>Payout</p>
                <p>(bi-weekly)</p>
              </div>
              <div>
                <p>Salary Per Month</p>
              </div>
              <div>
                <p>Refundable Fees</p>
              </div>
            </div>

            {/* Evaluation */}
            <div className="text-grey-900 grid gap-8 px-5 py-8 bg-[#E6F3E6] text-center rounded-3xl">
              <div>
                <p>5%</p>
              </div>
              <div>
                <p>9%</p>
              </div>
              <div>
                <p>7%</p>
              </div>
              <div>
                <p>5%</p>
              </div>
              <div>
                <p>Zero</p>
                <p>Time Limit</p>
              </div>
              <div>
                <p>80/20</p>
              </div>
              <div>
                <p>0.5%</p>
              </div>
              <div>
                <p>$45</p>
              </div>
            </div>

            {/* Account Size */}
            <div className="text-white grid gap-8 px-5 py-8 bg-[#131B35] text-center rounded-3xl">
              <div>
                <p>5%</p>
              </div>
              <div>
                <p>9%</p>
              </div>
              <div>
                <p>7%</p>
              </div>
              <div>
                <p>5%</p>
              </div>
              <div>
                <p>Zero</p>
                <p>Time Limit</p>
              </div>
              <div>
                <p>80/20</p>
              </div>
              <div>
                <p>0.5%</p>
              </div>
              <div>
                <p>$45</p>
              </div>
            </div>

            {/* Evaluation */}
            <div className="text-grey-900 grid gap-8 px-5 py-8 bg-[#E6F3E6] text-center rounded-3xl">
              <div>
                <p>5%</p>
              </div>
              <div>
                <p>9%</p>
              </div>
              <div>
                <p>7%</p>
              </div>
              <div>
                <p>5%</p>
              </div>
              <div>
                <p>Zero</p>
                <p>Time Limit</p>
              </div>
              <div>
                <p>80/20</p>
              </div>
              <div>
                <p>0.5%</p>
              </div>
              <div>
                <p>$45</p>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col items-start justify-between mt-10">
            {/* Chnage Currency */}
            <ChangeCurrency />

            <div className="grid grid-flow-col w-max gap-2 text-white">
              <p className="font-bold text-yellow-500">Note:</p>
              <div>
                <p>First payout - 14 days</p>
                <p>Second payout - 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
