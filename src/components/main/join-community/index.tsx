import Image from "next/image";
import React from "react";

export default function JoinCommunity() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container relative">
        {/* Background Images */}
        <span className="w-52 absolute bottom-0 left-0">
          <Image
            src="/assets/a-group-of-cheerful-young-people.svg"
            width={1000}
            height={1000}
            alt=""
          />
        </span>

        <span className="w-[200px] absolute bottom-0 left-1/2 -translate-x-1/2">
          <Image
            src="/assets/man-sitting-with-laptop-and-working.svg"
            width={1000}
            height={1000}
            alt=""
          />
        </span>

        <span className="w-[340px] absolute top-0 right-0">
          <Image
            src="/assets/young-women-taking-a-selfie.svg"
            width={1000}
            height={1000}
            alt=""
          />
        </span>

        {/* Content */}
        <div className="text-white relative">
          <div className="text-center text-2xl bg-[rgba(245,_245,_245,_0.13)] grid justify-items-center gap-8 max-w-5xl mx-auto py-24 px-6 rounded-2xl">
            <h2 className="text-5xl font-bold max-w-3xl">
              Join the Global Community for Traders, by the Traders
            </h2>
            <p className="max-w-2xl">
              Start your journey to financial trading success with Trufunder,its
              is in our sole interest and profit that you become successful.
            </p>
            <p>Don’t trade in isolation. Join our Discord Community.</p>
          </div>

          <button className="grid grid-flow-col gap-2 rounded-md px-6 py-3 items-center text-xl font-bold bg-[#646465] mx-auto mt-10">
            <span className="block relative w-16">
              <Image
                src={"/assets/discord.svg"}
                width={1000}
                height={1000}
                alt="Discord Icon"
              />
            </span>
            <span className="max-w-40">JOIN DISCORD COMMUNITY</span>
          </button>
        </div>
      </div>
    </section>
  );
}
