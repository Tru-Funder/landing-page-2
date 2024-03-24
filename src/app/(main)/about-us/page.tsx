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
      <div className="bg-[#070F2A] layout-space py-40 grid place-content-center">
        <h2 className="text-green-500 text-4xl sm:text-6xl lg:text-7xl font-semibold">
          Coming Soon !!!
        </h2>
      </div>
      {/* <MeetTheTeam />
      <OurMissionAndVision />
      <OurCoreValues />
      <FinancialFreedom />
      <ConquerTheMarkets /> */}
      <JoinCommunity />
    </main>
  );
}
