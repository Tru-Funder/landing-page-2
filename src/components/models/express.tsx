import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Express() {
  return (
    <section className="bg-[#070F2A] py-24">
      <div className="custom-container grid gap-16">
        <h2 className="text-white font-bold text-3xl">
          <span className="text-yellow-300 text-5xl">Express</span> Challenge
        </h2>
        <span className="block relative w-64 mx-auto">
          <Image
            src={
              "/assets/man-holding-money-in-front-of-a-growing-bitcoin-graph.png"
            }
            width={1000}
            height={1000}
            alt="Illustration"
          />
        </span>

        <div className="text-white grid gap-10 text-xl">
          <p>
            Direct Funding for Rapid Profit Generation With our Express Trading
            Account Challenge, you can bypass lengthy evaluation phases and
            access direct funding, enabling you to dive into the market and
            start generating profits without delay. This streamlined approach
            empowers you to capitalize on trading opportunities and maximize
            your earnings at your fastest pace, ensuring that you can achieve
            your financial goals with ease.
          </p>

          <p>
            Convenience and Efficiency at Your Fingertips At Trufunder, we
            understand the importance of convenience and efficiency in the
            trading process. Our Express Trading Account is designed to provide
            you with a seamless and hassle-free experience, allowing you to
            focus on executing strategic trades and maximizing your returns
            without unnecessary obstacles or delays.
          </p>

          <p>
            Join Trufunder&apos;s Express Trading Account today and experience a
            new level of speed, convenience, and profitability in your trading
            journey. With direct funding and a clear path to profit generation,
            you can take control of your financial future and achieve success on
            your own terms.
          </p>
        </div>

        <Button variant="contained" className="mx-auto">
          View Challenge Stats
        </Button>

        <div className="grid grid-flow-col justify-between">
          <Link
            href={"/models?activeTab=evaluation"}
            className="text-white decoration-dashed underline"
          >
            Evaluation Challenge
          </Link>
          <Link
            href={"/models?activeTab=one-step"}
            className="text-white decoration-dashed underline"
          >
            One-step Challenge
          </Link>
        </div>
      </div>
    </section>
  );
}
