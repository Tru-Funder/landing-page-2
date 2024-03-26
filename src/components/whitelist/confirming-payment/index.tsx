"use client";

import { RootState } from "@/store/index.store";
import { Button } from "@/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ConfirmingPayment() {
  const router = useRouter();

  const userId = useSelector(
    (state: RootState) => state.wihtelistSlice.data.userId
  );

  const [time, setTime] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    if (!userId) {
      router.push("/whitelist");
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            return { minutes: prevTime.minutes - 1, seconds: 59 };
          } else {
            return { minutes: prevTime.minutes, seconds: prevTime.seconds - 1 };
          }
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="custom-container relative">
      <div className="bg-[#131B35] text-white px-5 xs:px-10 sm:px-20 py-10 sm:py-20 rounded-xl mt-10 sm:mt-20">
        <div className="grid gap-8">
          <h2 className="text-3xl font-bold text-center">
            Confirming Payment...
          </h2>
          <p className="text-center text-[#E6F3E680]">
            Kindly review your email inbox. A message has been dispatched
            containing the details of your purchase.
          </p>
          <Link href={"/"} className="block mx-auto">
            <Button variant="contained">Go to Homepage</Button>
          </Link>
        </div>

        {/* <div className="mt-10 mx-auto w-max grid gap-x-4 gap-y-2 grid-cols-[1fr_auto_1fr] items-start justify-items-center">
          <p className="text-7xl sm:text-9xl">
            {time.minutes.toString().padStart(2, "0")}
          </p>
          <p className="text-7xl sm:text-9xl leading-[60px] sm:leading-[100px]">
            :
          </p>
          <p className="text-7xl sm:text-9xl">
            {time.seconds.toString().padStart(2, "0")}
          </p>
          <p>minutes</p>
          <p></p>
          <p>seconds</p>
        </div> */}
      </div>
    </div>
  );
}
