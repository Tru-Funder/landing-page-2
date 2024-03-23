import React from "react";
import Card from "./card";
import {
  CRYPTO_EXCHANGES,
  FOREX_EXCHANGES,
  STOCK_EXCHANGES,
} from "@/constants/trade-our-products";

export default function TradeOurProducts() {
  return (
    <section className="pt-10 pb-24 bg-[#070E2A] layout-space">
      <div className="custom-container relative">
        <h2 className="text-5xl font-bold capitalize text-center text-white">
          Trade Our <span className="text-yellow-500">Products</span>
        </h2>
        <p className="text-center text-2xl max-w-2xl mx-auto text-white mt-8">
          Introducing Trufunder - the ultimate prop firm product for serious
          traders in the US market.
        </p>

        <div className="relative mt-20">
          <Card
            Icon_url="/assets/stock.png"
            title="STOCK"
            exchanges={STOCK_EXCHANGES}
            className="absolute mx-auto scale-50 -left-[130px] top-1/2 -translate-y-1/2"
          />
          <Card
            Icon_url="/assets/forex.png"
            title="FOREX"
            exchanges={FOREX_EXCHANGES}
            className="absolute mx-auto scale-75 left-[32px] top-1/2 -translate-y-1/2"
          />
          <Card
            Icon_url="/assets/bitcoin.png"
            title="CRYPTO"
            exchanges={CRYPTO_EXCHANGES}
            className="relative mx-auto z-20"
          />
          <Card
            Icon_url="/assets/energies.png"
            title="METAL"
            exchanges={CRYPTO_EXCHANGES}
            className="absolute mx-auto scale-75 right-[32px] top-1/2 -translate-y-1/2 z-10"
          />
          <Card
            Icon_url="/assets/energies.png"
            title="ENERGIES"
            exchanges={CRYPTO_EXCHANGES}
            className="absolute mx-auto scale-50 -right-[130px] top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
}
