import { Button } from "@/ui";
import Image from "next/image";
import React from "react";

export default function TrufunderTradingPlatform() {
  return (
    <section className="grid grid-cols-[auto_1fr] items-center gap-10 custom-container mt-32 py-24">
      <span className="block relative w-[500px]">
        <Image
          src="/assets/trufunder-trading-platform-image.svg"
          width={1000}
          height={1000}
          alt="TruFunder Trading Platform Image"
        />
      </span>

      <div className="grid gap-6">
        <div className="grid gap-8">
          <h2 className="text-5xl text-grey-900 font-bold max-w-md">
            <span className="text-green-500">Trufunder</span> trading platform
          </h2>
          <p className="text-lg text-grey-900">
            we take our traders accomplishments seriously that&apos;s why we
            have come up with very robust strategies to ensure every trader
            trading with Trufunder is successful
          </p>
        </div>

        <Button variant="contained">Get Funded</Button>
      </div>
    </section>
  );
}
