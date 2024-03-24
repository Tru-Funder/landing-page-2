import CompareOurChallenges from "@/components/home/compare-our-challenges";
import Hero from "@/components/home/hero";
import TradeOurProducts from "@/components/home/trade-our-products";
import TrufunderChallengeTypes from "@/components/home/trufunder-challenge-types";
import TrufunderTradingPlatform from "@/components/home/trufunder-trading-platform";
import WhatMakesTruFunderDifferent from "@/components/home/what-makes-trufunder-different";
import JoinCommunity from "@/components/join-community";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrufunderTradingPlatform />
      <WhatMakesTruFunderDifferent />
      <TrufunderChallengeTypes />
      <CompareOurChallenges />
      {/* <TradeOurProducts /> */}
      <JoinCommunity />
    </main>
  );
}
