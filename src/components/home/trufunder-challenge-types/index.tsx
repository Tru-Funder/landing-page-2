import Image from "next/image";
import React from "react";

export default function TrufunderChallengeTypes() {
  return (
    <section className="py-28 bg-[#070E2A] layout-space relative">
      {/* Background Images */}
      <span className="absolute w-24 block right-20 top-28 opacity-60">
        <Image
          src={"/assets/bg-global-digital.png"}
          width={1000}
          height={1000}
          alt="Background Icon"
        />
      </span>

      <div className="custom-container">
        <h2 className="text-5xl font-bold capitalize text-center text-white">
          <span className="text-yellow-500">Trufunder</span> Challenge Types
        </h2>
        <p className="text-center text-2xl text-white mt-8">
          Empowering Traders: The Revolutionary Platform of Trufunder
        </p>

        <div className="w-full h-2 rounded-full bg-white mt-20 grid grid-cols-3">
          <div className="w-full h-full bg-[#54B058] rounded-full relative">
            <div className="bg-[#54B058] absolute w-20 h-20 rounded-full flex items-center justify-center border-4 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block w-7">
                <Image
                  src={"/assets/rating.svg"}
                  width={100}
                  height={100}
                  alt="Rating Icon"
                />
              </span>
            </div>
          </div>

          <div className="w-full h-full bg-white rounded-full relative">
            <div className="bg-white absolute w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#54B058] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block w-7">
                <Image
                  src={"/assets/deadline.svg"}
                  width={100}
                  height={100}
                  alt="Deadline Icon"
                />
              </span>
            </div>
          </div>

          <div className="w-full h-full bg-white rounded-full relative">
            <div className="bg-white absolute w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#54B058] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block w-7">
                <Image
                  src={"/assets/one-time-password.svg"}
                  width={100}
                  height={100}
                  alt="One Step Icon"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-20 gap-20">
          <div className="text-white text-center grid gap-5">
            <h3 className="text-2xl font-bold">Evaluation</h3>
            <p>
              Evaluation Explore out two-step evaluation account: a structured
              pathway to trading expertise.
            </p>
          </div>

          <div className="text-white text-center grid gap-5">
            <h3 className="text-2xl font-bold">Express</h3>
            <p>
              Direct funding with our express trading account, you can bypass
              lengthy evaluation phases and access direct funding.
            </p>
          </div>

          <div className="text-white text-center grid gap-5">
            <h3 className="text-2xl font-bold">One-Step</h3>
            <p>
              Transition from being a lucky trader to a skillful, strategic one
              with Trufunder One-Step Account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
