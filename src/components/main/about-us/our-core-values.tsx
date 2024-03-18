import { CORE_VALUES } from "@/constants/our-core-values";
import Image from "next/image";
import React from "react";

export default function OurCoreValues() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container grid grid-cols-[1fr_auto]">
        <div className="text-white">
          <p className="text-2xl w-max bg-clip-text text-transparent bg-[linear-gradient(92deg,_#02BC09_16.53%,_#007E04_85.83%)]">
            Our Core Values
          </p>
          <h2 className="text-4xl font-bold mt-3">Our Guiding Principles</h2>

          <div className="grid grid-cols-2 gap-3 mt-10 px-5">
            <div className="grid gap-8 content-start">
              {CORE_VALUES.slice(0, 6).map((v, i) => (
                <div
                  key={i}
                  className="grid grid-flow-col w-max items-center gap-3"
                >
                  <span className="w-6 h-6 block bg-[linear-gradient(153deg,_#03C90A_16.67%,_#008905_100%)] rounded-full"></span>
                  <p className="font-bold text-2xl">{v}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-8 content-start">
              {CORE_VALUES.slice(6, 8).map((v, i) => (
                <div
                  key={i}
                  className="grid grid-flow-col w-max items-center gap-3"
                >
                  <span className="w-6 h-6 block bg-[linear-gradient(153deg,_#03C90A_16.67%,_#008905_100%)] rounded-full"></span>
                  <p className="font-bold text-2xl">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid w-[500px] h-[450px]">
          <span className="block relative w-[70%] self-start justify-self-end overflow-hidden rounded-md [grid-area:_-1/1]">
            <Image
              src={"/assets/sample-member-2.png"}
              width={1000}
              height={1000}
              alt="Team Memeber Image"
            />
          </span>
          <span className="block relative w-[50%] self-end overflow-hidden rounded-md [grid-area:_-1/1]">
            <Image
              src={"/assets/sample-member-4.png"}
              width={1000}
              height={1000}
              alt="Team Memeber Image"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
