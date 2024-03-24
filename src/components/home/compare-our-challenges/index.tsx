import React from "react";
import Platforms from "./platforms";
import RegistrationFee from "./registration-fee";
import SelectAccountType from "./select-account-type";
import SelectAccountSize from "./select-account-size";
import EvaluationTradingChallenge from "./evaluation-trading-challenge";
import EvaluationVerification from "./evaluation-verification";
import ExpressTradingChallenge from "./express-trading-challenge";
import OneStepLiveSimulation from "./one-step-live-simulation";
import OneStepVerification from "./one-step-verification";
import Image from "next/image";

export default function CompareOurChallenges() {
  return (
    <section className="bg-[#070E2A] pt-10 lg:pt-20 pb-20 lg:pb-36 relative layout-space overflow-hidden">
      {/* Background Images */}
      <span className="absolute w-40 block -right-28 bottom-64 opacity-60">
        <Image
          src={"/assets/bg-rocket.png"}
          width={500}
          height={500}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-24 block left-[16vw] bottom-0 opacity-60">
        <Image
          src={"/assets/bg-rocket.png"}
          width={500}
          height={500}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-28 block right-[16vw] bottom-0 opacity-60">
        <Image
          src={"/assets/bg-cardano.png"}
          width={500}
          height={500}
          alt="Background Icon"
        />
      </span>

      <div className="custom-container relative">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center">
          <span className="text-yellow-600">Compare</span> Our Challenges
        </h2>

        <div className="grid xl:grid-cols-[1fr_auto] gap-5 mt-10 lg:mt-20">
          <div className="grid gap-10 content-start">
            <SelectAccountType />
            <SelectAccountSize />

            <div className="grid sm:grid-flow-col gap-5">
              <EvaluationTradingChallenge />
              <EvaluationVerification />
              <ExpressTradingChallenge />
              <OneStepVerification />
              <OneStepLiveSimulation />
            </div>
          </div>

          <div className="w-full lg:w-max grid gap-5 grid-rows-[1fr_auto] xl:pt-12">
            <Platforms />
            <RegistrationFee />
          </div>
        </div>

        <div className="grid xs:grid-flow-col text-sm xs:text-bse w-max gap-2 text-white mt-10">
          <p className="font-bold text-yellow-500">Note:</p>
          <div className="grid grid-flow-col w-max gap-2">
            <p className="border-r border-white pr-2">First payout - 14 days</p>
            <p>Second payout - 7 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
