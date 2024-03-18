import ConquerTheMarkets from "@/components/main/about-us/conquer-the-markets";
import FinancialFreedom from "@/components/main/about-us/financial-freedom";
import MeetTheTeam from "@/components/main/about-us/meet-the-team";
import OurCoreValues from "@/components/main/about-us/our-core-values";
import OurMissionAndVision from "@/components/main/about-us/our-mission-and-vision";
import JoinCommunity from "@/components/main/join-community";
import React from "react";

export default function Page() {
  return (
    <main>
      <MeetTheTeam />
      <OurMissionAndVision />
      <OurCoreValues />
      <FinancialFreedom />
      <ConquerTheMarkets />
      <JoinCommunity />
    </main>
  );
}
