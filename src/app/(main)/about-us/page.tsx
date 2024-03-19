import ConquerTheMarkets from "@/components/about-us/conquer-the-markets";
import FinancialFreedom from "@/components/about-us/financial-freedom";
import MeetTheTeam from "@/components/about-us/meet-the-team";
import OurCoreValues from "@/components/about-us/our-core-values";
import OurMissionAndVision from "@/components/about-us/our-mission-and-vision";
import JoinCommunity from "@/components/join-community";
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
