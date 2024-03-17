import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Evaluation() {
  return (
    <section className="bg-[#070F2A] py-24">
      <div className="custom-container grid gap-16">
        <h2 className="text-white font-bold text-3xl">
          <span className="text-yellow-300 text-5xl">Evaluation</span> Challenge
        </h2>
        <span className="block relative w-64 mx-auto">
          <Image
            src={"/assets/phone-with-arrow-money-stars.png"}
            width={1000}
            height={1000}
            alt="Illustration"
          />
        </span>

        <div className="text-white grid gap-10 text-xl">
          <p>
            Introducing Trufunder&apos;s 2-Step Evaluation Account Challenge:
            Your Path to Trading Mastery Are you ready to take your trading
            skills to the next level?
          </p>

          <p>
            <span className="font-bold">Step 1:</span> Easiest Challenges at the
            Lowest Affordable Price Our 2-Step Evaluation Account offers you the
            opportunity to tackle the easiest challenges at a price that
            won&apos;t break the bank. We believe that everyone should have the
            chance to learn and grow as a trader, and our program reflects that
            commitment. You can start your journey towards trading mastery
            without the financial burden.
          </p>

          <p>
            <span className="font-bold">Step 2:</span> Sharpen Your Trading
            Skills Once you&apos;ve completed the initial challenges,
            you&apos;ll have the chance to sharpen your trading skills in
            preparation for live market action. Our program is designed to
            provide you with the knowledge and confidence you need to navigate
            the complexities of the market with ease.
          </p>

          <p>
            At Trufunder, we believe in empowering traders at every level, and
            our 2-Step Evaluation Account is just one of the ways we&apos;re
            making that happen. Join us today and take the first step towards
            realizing your full potential as a trader.
          </p>
        </div>

        <Button variant="contained" className="mx-auto">
          View Challenge Stats
        </Button>

        <div className="text-white decoration-dashed underline w-max ml-auto">
          <Link href={"/challenges?activeTab=express"}>Express Challenge</Link>
        </div>
      </div>
    </section>
  );
}
