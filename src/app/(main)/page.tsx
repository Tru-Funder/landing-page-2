import CompareOurChallenges from "@/components/home/compare-our-challenges";
import Hero from "@/components/home/hero";
import SupportedTradingPlatforms from "@/components/home/supported-trading-platforms";
import TrufunderTradingPlatform from "@/components/home/trufunder-trading-platform";
import WhatMakesTruFunderDifferent from "@/components/home/what-makes-trufunder-different";
import JoinCommunity from "@/components/join-community";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrufunderTradingPlatform />
      <WhatMakesTruFunderDifferent />
      <SupportedTradingPlatforms />
      <CompareOurChallenges />
      <JoinCommunity />
    </main>
  );
}
