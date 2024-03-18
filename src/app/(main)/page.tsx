import CompareOurChallenges from "@/components/main/home/compare-our-challenges";
import Hero from "@/components/main/home/hero";
import JoinCommunity from "@/components/main/join-community";
import TrufunderTradingPlatform from "@/components/main/home/trufunder-trading-platform";
import TrustfundChallengeTypes from "@/components/main/home/supported-trading-platforms";
import React from "react";
import WhatMakesTruFunderDifferent from "@/components/main/home/what-makes-trufunder-different";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrufunderTradingPlatform />
      <WhatMakesTruFunderDifferent />
      <TrustfundChallengeTypes />
      <CompareOurChallenges />
      <JoinCommunity />
    </main>
  );
}
