import GettingStarted from "@/components/faq/getting-started";
import HowCanWeHelpYou from "@/components/faq/how-can-we-help-you";
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
      {/* <HowCanWeHelpYou />
      <GettingStarted /> */}
      <JoinCommunity />
    </main>
  );
}
