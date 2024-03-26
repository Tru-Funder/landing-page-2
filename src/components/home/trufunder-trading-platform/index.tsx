import { Button } from "@/ui";
import Image from "next/image";
import React from "react";

export default function TrufunderTradingPlatform() {
  return (
    <section className=" pt-20 lg:pt-28 pb-28 lg:pb-36 bg-[#070E2A] layout-space relative overflow-hidden before:absolute before:w-[40vw] before:h-[40vw] before:-top-[30vw] before:-left-[20vw] before:rounded-[50%] before:bg-[rgba(3,_201,_10,_0.50)] before:blur-[340px] after:absolute after:w-[40vw] after:h-[40vw] after:-top-[30vw] after:-right-[20vw] after:rounded-[50%] after:bg-[rgba(3,_201,_10,_0.50)] after:blur-[340px]">
      {/* Background Images */}
      <span className="absolute w-48 block -left-20 top-10 opacity-40">
        <Image
          src={"/assets/bg-global-digital.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-80 hidden md:block -right-20 bottom-0 opacity-40">
        <Image
          src={"/assets/bg-global-digital.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-28 lg:w-40 block left-20 bottom-0">
        <Image
          src={"/assets/bg-cardano.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      {/* Contents */}
      <div className="custom-container relative grid md:grid-cols-[auto_1fr] items-center gap-16 z-10">
        <span className="block relative max-w-lg mx-auto md:w-[44vw]">
          <Image
            src="/assets/trufunder-trading-platform-image.png"
            width={1000}
            height={1000}
            alt="TruFunder Trading Platform Image"
          />
        </span>

        <div className="grid gap-6 text-white">
          <div className="grid gap-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold max-w-lg capitalize">
              <span className="text-yellow-500">Trufunder</span> trading
              platform
            </h2>
            <p className="text-lg max-w-lg">
              we take our traders accomplishments seriously that&apos;s why we
              have come up with very robust strategies to ensure every trader
              trading with Trufunder is successful
            </p>
          </div>

          <Button variant="contained" className="w-max">
            Get Funded
          </Button>
        </div>
      </div>
    </section>
  );
}
