"use client";

import React, { useState } from "react";
import SalaryRewardSystem from "./salary-reward-system";
import InstallmetalPayment from "./installmetal-payment";
import ResetAccount from "./reset-account";
import Consultation from "./consultation";
import Image from "next/image";

export default function Slide() {
  const [currentSlide, setCurrentSlide] = useState(2);

  const handleIncrementSlide = () => {
    if (currentSlide === 4) return;
    setCurrentSlide((slide) => slide + 1);
  };

  const handleDecrementSlide = () => {
    if (currentSlide === 1) return;
    setCurrentSlide((slide) => slide - 1);
  };

  return (
    <>
      <div className="mt-16 relative w-full overflow-hidden h-[400px]">
        <div
          className={`w-[50vw] top-1/2 -translate-y-1/2 absolute transition-all ${
            currentSlide === 1
              ? "scale-100 opacity-100"
              : "scale-[0.6] opacity-30"
          } ${
            currentSlide === 1
              ? "left-1/2 -translate-x-1/2"
              : currentSlide === 2
              ? "-left-[25%]"
              : currentSlide === 3
              ? "-left-[50%]"
              : "-left-[75%]"
          }`}
        >
          <SalaryRewardSystem />
        </div>

        <div
          className={`w-[50vw] top-1/2 -translate-y-1/2 absolute transition-all ${
            currentSlide === 2
              ? "scale-100 opacity-100"
              : "scale-[0.6] opacity-30"
          } ${
            currentSlide === 1
              ? "left-[75%]"
              : currentSlide === 2
              ? "left-1/2 -translate-x-1/2 "
              : currentSlide === 3
              ? "-left-[25%]"
              : "-left-[50%]"
          }`}
        >
          <InstallmetalPayment />
        </div>

        <div
          className={`w-[50vw] top-1/2 -translate-y-1/2 absolute transition-all ${
            currentSlide === 3
              ? "scale-100 opacity-100"
              : "scale-[0.6] opacity-30"
          } ${
            currentSlide === 1
              ? "  left-[100%]"
              : currentSlide === 2
              ? "left-[75%]"
              : currentSlide === 3
              ? "left-1/2 -translate-x-1/2 scale-100"
              : "-left-[25%]"
          }`}
        >
          <ResetAccount />
        </div>

        <div
          className={`w-[50vw] top-1/2 -translate-y-1/2 absolute transition-all ${
            currentSlide === 4
              ? "scale-100 opacity-100"
              : "scale-[0.6] opacity-30"
          } ${
            currentSlide === 1
              ? "left-[125%]"
              : currentSlide === 2
              ? "left-[100%]"
              : currentSlide === 3
              ? "left-[75%]"
              : "left-1/2 -translate-x-1/2 scale-100"
          }`}
        >
          <Consultation />
        </div>

        {/* Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 px-[5%] grid grid-flow-col w-full">
          {currentSlide > 1 && (
            <button
              className="block relative w-20"
              onClick={handleDecrementSlide}
            >
              <Image
                src={"/assets/left-arrow.svg"}
                width={1000}
                height={1000}
                alt="Previous Slide Icon"
              />
            </button>
          )}

          {currentSlide < 4 && (
            <button
              className="flex relative w-20 justify-self-end"
              onClick={handleIncrementSlide}
            >
              <Image
                src={"/assets/right-arrow.svg"}
                width={1000}
                height={1000}
                alt="Previous Slide Icon"
              />
            </button>
          )}
        </div>
      </div>

      {/* Indicators */}
      <div className="grid grid-flow-col w-max gap-3 mx-auto mt-10">
        {[...Array(4)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i + 1)}
            className={`block w-4 h-4 bg- rounded-full ${
              currentSlide === i + 1 ? "bg-green-400" : "bg-neutral-800"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
}
