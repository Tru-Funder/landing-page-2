import CompareOurChallenges from "@/components/main/home/compare-our-challenges";
import Hero from "@/components/main/home/hero";
import JoinCommunity from "@/components/main/home/join-community";
import TrufunderTradingPlatform from "@/components/main/home/trufunder-trading-platform";
import TrustfundChallengeTypes from "@/components/main/home/trustfund-challenge-types";
import React from "react";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrufunderTradingPlatform />
      <TrustfundChallengeTypes />
      <CompareOurChallenges />
      <JoinCommunity />
    </main>
  );
}
