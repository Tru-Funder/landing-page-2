import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JoinCommunity() {
  return (
    <section className="bg-[linear-gradient(108.71deg,_#070E2A_22.91%,_#04421B_53.34%,_#035714_70.46%,_#016F0D_78.06%,_#008905_86.3%)] py-10 relative layout-space">
      {/* Background Images */}
      <span className="w-[600px] block absolute -left-[300px] top-1/2 -translate-y-1/2 opacity-30">
        <Image
          src="/assets/bg-cardano.png"
          width={1000}
          height={1000}
          alt="bg image"
        />
      </span>

      <div className="custom-container relative bg-[linear-gradient(304.59deg,_#008905_13.88%,_rgba(0,_35,_1,_0)_49.25%)] shadow-[0px_4px_22px_0px_#00000080] rounded-2xl p-[2px]">
        {/* Content */}
        <div className="text-center sm:text-xl text-white bg-[rgba(7,_14,_42,0.5)] grid justify-items-center gap-8 mx-auto py-10 px-6 rounded-2xl">
          <h2 className="text-2xl md:text-4xl font-bold max-w-3xl">
            Join our community built just for you
          </h2>
          <p className="max-w-2xl">
            Start your journey to financial trading success with Trufunder,its
            is in our sole interest and profit that you become successful.
          </p>
          <p className="">
            Don’t trade in isolation. Join our Discord Community.
          </p>

          <Link
            href={"https://discord.gg/M73gWMTU"}
            target="_blank"
            className="mt-8"
          >
            <Button
              variant="contained"
              className="text-sm sm:text-lg gap-3 py-4"
            >
              <span className="block relative w-6 sm:w-10">
                <Image
                  src={"/assets/discord-white-green.png"}
                  width={1000}
                  height={1000}
                  alt="Discord Icon"
                />
              </span>
              <span className="">JOIN DISCORD COMMUNITY</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
