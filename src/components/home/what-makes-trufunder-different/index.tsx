import { WHAT_MAKES_TRUFUNDER_DIFFERENT } from "@/constants/what-makes-trufunder-different";
import Image from "next/image";
import React from "react";

export default function WhatMakesTruFunderDifferent() {
  return (
    <section className="bg-[#070E2A] pt-10 lg:pt-20 pb-10 lg:pb-28 relative layout-space">
      {/* Background Image */}
      <span className="absolute w-48 block -left-32 -bottom-32 z-10 -scale-x-[1] opacity-60 lg">
        <Image
          src={"/assets/bg-rocket.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <div className="custom-container relative z-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center">
          What Makes <span className="text-yellow-600">Trufunder</span>{" "}
          Different
        </h2>

        <div className="bg-[#202841] rounded-xl grid xs:grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white p-10 mt-10 lg:mt-20 items-start">
          {WHAT_MAKES_TRUFUNDER_DIFFERENT.map((t, i) => (
            <div key={i} className="grid gap-3">
              <h3 className="text-[#54B058] font-bold">{t.title}</h3>
              <p className="text-sm">{t.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
