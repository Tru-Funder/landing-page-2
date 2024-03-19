import React from "react";
import Card from "./card";
import { SUPPORTED_TRADING_PLATFORMS } from "@/constants/supported-trading-platforms";

export default function SupportedTradingPlatforms() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container">
        <h2 className="text-5xl font-bold text-white text-center">
          <span className="text-yellow-600">Supported</span> Trading Platforms
        </h2>
        <p className="text-center text-2xl text-white mt-8">
          Execute your trades seamlessly.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-16">
          {SUPPORTED_TRADING_PLATFORMS.map((t, i) => (
            <Card key={i} icon={t.icon} title={t.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
