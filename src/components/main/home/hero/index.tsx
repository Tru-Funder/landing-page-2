import { Button, ICONS, Icon } from "@/ui";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className={`h-screen relative grid justify-items-center`}>
      {/* Background Image */}
      <div className="absolute top-0 left-0 overflow-hidden w-full h-full">
        <Image
          src="/assets/hero-bg.svg"
          alt="Hero Section Background Image"
          fill
          className="object-cover"
        />
        <span className="block w-full h-full bg-[rgba(8,_15,_46,_0.85)] relative"></span>
      </div>

      {/* Content */}
      <div className={`relative grid gap-8 content-start mt-[188px]`}>
        <div
          className={`text-white text-center grid justify-items-center gap-4`}
        >
          <p className="text-3xl font-bold">Our Fund, Your Profit</p>
          <h1 className="text-6xl font-bold">
            Unleash Your <span className="text-yellow-500">Trading</span>{" "}
            Potential
          </h1>
          <p className="max-w-md ">
            Unleash Your Trading Potential with Trufunder: A Prop firm for the
            trader and by the trader.
          </p>
        </div>

        <div className={`grid grid-flow-col gap-6 w-max mx-auto`}>
          <Button variant="contained">Get Funded</Button>
          <Button variant="outlined">
            <Icon types={ICONS.Discord} size={23} color="#008905" />
            Join Our Discord
          </Button>
        </div>
      </div>

      <span className="block absolute top-[65vh] w-[60vw] [box-shadow:_4px_4px_10px_0px_rgba(0,_0,_0,_0.14)] rounded-xl">
        <Image
          src={"/assets/hero-image.svg"}
          width={4000}
          height={4000}
          alt="TruFunder Dashboard Image"
        />
      </span>
    </section>
  );
}
