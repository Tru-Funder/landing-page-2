import React from "react";
import Tabs from "./tabs";
import Card from "./card";
import { TRU_FUNDER_CHALLENGE_TYPES } from "@/constants/trufunder-challenge-types";

export default function TrustfundChallengeTypes() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container">
        <h2 className="text-5xl font-bold text-white text-center">
          <span className="text-yellow-600">TruFunder</span> Challenge Types
        </h2>
        <p className="text-center text-2xl text-white mt-8">
          Empowering Traders: The Revolutionary Platform of Trufunder
        </p>

        <Tabs />

        <div className="grid grid-cols-3 gap-5 mt-16">
          {TRU_FUNDER_CHALLENGE_TYPES.map((t, i) => (
            <Card key={i} icon={t.icon} title={t.title} content={t.content} />
          ))}
        </div>
      </div>
    </section>
  );
}
