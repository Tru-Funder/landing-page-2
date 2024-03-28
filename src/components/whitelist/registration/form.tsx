"use client";

import React, { FormEvent } from "react";
import SelectAccountType from "./select-account-type";
import PreferredTradingPlatform from "./preferred-trading-platform";
import { doc, setDoc } from "firebase/firestore";
import { Button } from "@/ui";
import { db } from "@/config/firebase";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  setWhitelistUserDetails,
  setWhitelistUserId,
} from "@/store/slices/whitelist";
import SelectCountry from "./select-country";

export default function Form() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const fullName = data.get("fullName") as string;
    const email = data.get("email") as string;
    const regionOfResidence = data.get("regionOfResidence") as string;
    const accountType = data.get("accountType") as string;
    const preferredPlatform = data.get("preferredPlatform") as string;

    await setDoc(doc(db, "whitelist", email), {
      fullName,
      email: email.toLowerCase(),
      regionOfResidence,
      accountType,
      preferredPlatform,
      paymentInfo: {
        address: "",
        verified: false,
        accountSize: "",
        amountPaid: "",
      },
    });

    dispatch(setWhitelistUserId(email));

    dispatch(
      setWhitelistUserDetails({
        fullName,
        email,
        regionOfResidence,
        accountType,
        preferredPlatform,
        paymentInfo: {
          address: "",
          verified: false,
          accountSize: "",
          amountPaid: "",
        },
      })
    );
    router.push("/whitelist?step=account-summary");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
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
          placeholder="Full Name"
          name="fullName"
          required
          className="w-full py-4 text-lg sm:text-xl text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-full py-4 text-lg sm:text-xl text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
        />

        <SelectCountry />

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
  );
}
