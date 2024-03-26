import { SOCIALS } from "@/constants/socials";
import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className={`min-h-screen relative grid pt-20 layout-space`}>
      {/* Background Image */}
      <div className="absolute top-0 left-0 overflow-hidden w-full h-full">
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Section Background Image"
          fill
          className="object-cover lg:object-fill"
        />
        <span className="block w-full h-full bg-[linear-gradient(180deg,_rgba(7,_14,_42,_0.60)_0%,_rgba(0,_0,_0,_0.60)_100%)] relative"></span>
      </div>

      {/* Content */}
      <div className="relative grid grid-rows-[1fr_auto] items-center text-white custom-container py-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="grid grid-flow-col items-center lg:w-max max-w-lg mx-auto lg:mx-0 bg-[linear-gradient(89deg,_rgba(21,_22,_38,_0.60)_0%,_rgba(109,_62,_64,_0.70)_100%)] rounded-md">
              <span className="block relative w-12">
                <Image
                  src={"/assets/icons/yellow-bg-arrow.svg"}
                  width={50}
                  height={50}
                  alt="Arrow Up Right Icon"
                />
              </span>
              <p className="text-xl font-semibold px-5 py-2">
                Our Funds, Your Profit
              </p>
            </div>

            <h1 className="text-5xl text-center mx-auto lg:mx-0 lg:text-left lg:text-6xl max-w-lg font-semibold mt-8">
              Unleashing Your <span className="text-yellow-500">Trading</span>{" "}
              Potentials
            </h1>

            <div className="grid lg:grid-flow-col lg:w-max gap-5 mt-12 max-w-lg mx-auto lg:mx-0">
              <Link href={"#compare-our-challenges"}>
                <Button variant="contained" className="py-3">
                  Get Funded
                </Button>
              </Link>
              <Link href={"https://discord.gg/eGUCb2dVKg"}>
                <Button className="py-3">
                  <span className="block relative w-8">
                    <Image
                      src={"/assets/discord-green-white.png"}
                      width={50}
                      height={50}
                      alt="Discord Logo"
                    />
                  </span>{" "}
                  Join Our Discord
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-[rgba(255,_255,_255,_0.17)] shadow-[0px_4px_22.8px_0px_rgba(0,_0,_0,_0.25)] w-full max-w-max lg:w-max mx-auto rounded-2xl p-6 grid gap-6">
            <span className="block relative w-full lg:w-96  shadow-[0px_10px_20.1px_0px_rgba(0,_0,_0,_0.50)] rounded-2xl">
              <Image
                src={"/assets/hero-img.png"}
                width={500}
                height={500}
                alt="Image"
              />
            </span>

            <div className="bg-[linear-gradient(180deg,_#008905_0%,_#002301_100%)] overflow-hidden relative p-6 rounded-2xl grid gap-5 after:absolute after:w-full after:h-full after:-right-1/2 after:rounded-[50%] after:bg-[rgba(255,_255,_255,_0.04)]">
              <p className="text-xl font-semibold max-w-40">
                Join Our Communities
              </p>
              <div className="grid grid-flow-col w-max gap-5">
                {SOCIALS.map((link, i) => (
                  <Link key={i} href={link.url} target="_blank">
                    <span
                      className={`relative block w-8 ${
                        link.alt === "Tiktok Icon" && "bg-white rounded-md"
                      }`}
                    >
                      <Image
                        src={link.icon_url}
                        width={1000}
                        height={1000}
                        alt={link.alt}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-flow-col justify-between gap-10 text-lg">
          <p className="max-w-72">
            We give <span className="font-bold">newbies</span> the opportunity
            of veteran traders
          </p>
          <span className="block h-full w-[1px] bg-white"></span>
          <p className="max-w-[275px]">
            We reward <span className="font-bold">skillful</span> traders into
            consistent profit machines
          </p>
          <span className="block h-full w-[1px] bg-white"></span>

          <p>
            Everyday is a <span className="font-bold">pay</span> day
          </p>
        </div>
      </div>
    </section>
  );
}
