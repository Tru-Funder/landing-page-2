import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OneStep() {
  return (
    <section className="bg-[#070F2A] py-10 md:py-24 layout-space">
      <div className="custom-container grid gap-16">
        <h2 className="text-white font-bold text-3xl text-center xs:text-left">
          <span className="text-yellow-300 text-5xl">One Step</span> Challenge
        </h2>
        <span className="block relative w-64 mx-auto">
          <Image
            src={"/assets/investments-and-financial-candlestick-chart.png"}
            width={1000}
            height={1000}
            alt="Illustration"
          />
        </span>

        <div className="text-white grid gap-10 text-lg sm:text-xl">
          <p>
            Transition from being a lucky trader to a skillful, strategic one
            with Trufunder&apos;s One-Step Account challenge. This innovative
            platform allows you to test your trading skill and strategy with an
            achievable profit target before handling real funds. It&apos;s your
            stepping stone to mastering the art of trading and ensuring
            consistent profitability in dynamic financial markets.
          </p>

          <p>
            Easiest Profit Target to Test Your Trading Skill and
            Strategy Trufunder&apos;s One-Step Account offers a low-risk,
            high-reward opportunity for traders to assess their skills and
            refine strategies in a controlled environment. This crucial step
            elevates trading capabilities and prepares traders for real
            scenarios.
          </p>

          <p>
            Graduate from Being a Lucky Trader to a Skillful One Upon reaching
            the profit target, traders demonstrate their ability to navigate the
            market with skill and precision. This achievement signifies
            readiness to transition from relying on luck to becoming strategic
            and proficient traders. Trufunder is committed to guiding traders on
            this transformative journey, empowering them to make informed
            decisions and secure sustainable profits.
          </p>
        </div>

        <Button variant="contained" className="mx-auto">
          View Challenge Stats
        </Button>

        <div className="grid grid-flow-col justify-between text-sm sm:text-base">
          <Link
            href={"/models?activeTab=express"}
            className="text-white decoration-dashed underline"
          >
            Express Challenge
          </Link>
          <Link
            href={"/models?activeTab=evaluation"}
            className="text-white decoration-dashed underline"
          >
            Evaluation Challenge
          </Link>
        </div>
      </div>
    </section>
  );
}
