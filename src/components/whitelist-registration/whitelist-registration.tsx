import { Button } from "@/ui";
import Image from "next/image";
import React from "react";
import SelectAccountType from "./select-account-type";
import PreferredTradingPlatform from "./preferred-trading-platform";

export default function WhitelistRegistration() {
  return (
    <section className=" pt-12 sm:pt-24 pb-44 bg-[#070E2A] layout-space relative overflow-hidden">
      {/* Background Images */}
      <span className="absolute w-28 sm:w-40 block left-[10%] top-12 opacity-40 md:opacity-80">
        <Image
          src={"/assets/bg-cardano.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-96 hidden lg:block -right-20 top-10 opacity-50">
        <Image
          src={"/assets/bg-global-digital.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-40 block -left-20 bottom-[500px] opacity-60">
        <Image
          src={"/assets/bg-rocket.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-48 block -right-28 bottom-80 opacity-60">
        <Image
          src={"/assets/bg-rocket.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <span className="absolute w-40 block left-1/2 -translate-x-1/2 bottom-20 opacity-40">
        <Image
          src={"/assets/bg-cardano.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      {/* Content */}
      <div className="custom-container relative">
        <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-white">
          <span className="text-yellow-500">Whitelist</span> Registration
        </h2>

        <form
          action=""
          className="bg-[#131B35] p-8 xs:p-10 sm:p-20 rounded-xl mt-10 sm:mt-20"
        >
          <div className="text-center text-white grid gap-5">
            <p className="text-2xl sm:text-3xl font-bold">
              Register Now and Get 50% Discount
            </p>
            <p className="text-lg sm:text-xl">
              Fill the registration form below to be whitelisted.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 mt-10 sm:mt-20">
            <input
              type="text"
              placeholder="First Name"
              className="w-full py-4 text-lg sm:text-xl text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-4 text-lg sm:text-xl text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
            />
            <input
              type="text"
              placeholder="Region of Residence"
              className="w-full py-4 text-lg sm:text-xl text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
            />
            <SelectAccountType />
          </div>

          <PreferredTradingPlatform />

          <Button
            variant="contained"
            className="mx-auto mt-20 sm:mt-28 text-xl py-3 px-8"
          >
            Register Now
          </Button>
        </form>
      </div>
    </section>
  );
}
