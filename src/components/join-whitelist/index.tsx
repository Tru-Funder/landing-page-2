import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function JoinWhiteList() {
  const [isPopUp, setIsPopUp] = useState(true);
  return (
    <div
      className={`fixed top-0 left-0 w-full layout-space h-screen  content-center justify-center bg-[rgba(0,0,0,0.8)] transition-all ${
        isPopUp ? "grid" : "hidden"
      }`}
    >
      <div className="bg-[linear-gradient(124.09deg,_#008905_0%,_#FED202_19.89%,_#008905_39.78%,_#FED202_59.68%,_#03C90A_79.57%,_#FED202_99.46%)] p-[2px] rounded-lg">
        <div className="max-w-2xl  w-full p-10 min-h-[500px] rounded-lg overflow-hidden grid content-center relative">
          <button
            onClick={() => setIsPopUp(false)}
            className="absolute top-5 right-5 w-8 sm:w-10 z-10"
          >
            <Image
              src={"/assets/icons/close.svg"}
              width={100}
              height={100}
              alt="Close Icon"
            />
          </button>

          {/* Background Images */}
          <span className="absolute top-0 left-0 w-full h-full">
            <Image
              src={"/assets/easter-bg.png"}
              fill
              className="object-cover"
              alt="Easter Background"
            />
          </span>

          <span className="absolute bottom-0 left-0 w-52">
            <Image
              src={"/assets/easter-flower.png"}
              width={500}
              height={500}
              alt="Easter Flower"
            />
          </span>

          <span className="absolute bottom-0 right-0 w-96">
            <Image
              src={"/assets/easter-bunny.png"}
              width={500}
              height={500}
              alt="Easter Flower"
            />
          </span>

          <span className="block absolute top-0 left-0 w-full h-full bg-[rgba(7,14,42,0.5)]"></span>

          <div className="relative text-center grid gap-5 justify-items-center text-white">
            <p className="text-lg font-medium">
              Hey there, Easter has started dropping bunnies already
            </p>
            <p className="text-xl xs:text-2xl sm:text-3xl font-bold max-w-xl leading-8 xs:leading-10">
              Enjoy a <span className="text-yellow-500">whopping</span> 50%
              discount on our presale launch which is only open to 200 people
              within the next 96 hours
            </p>

            <Link href="/whitelist-registration">
              <Button
                onClick={() => setIsPopUp(false)}
                variant="contained"
                className="mt-5 sm:mt-10 py-3 px-8"
              >
                Join WhiteList
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
