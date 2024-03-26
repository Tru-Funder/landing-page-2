"use client";

import { db } from "@/config/firebase";
import { PAYMENT_METHODS } from "@/constants/payment-methods";
import { RootState } from "@/store/index.store";
import { Button } from "@/ui";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MakePayment() {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<Record<string, any>>({});

  const userId = useSelector(
    (state: RootState) => state.wihtelistSlice.data.userId
  );

  const method = useSelector(
    (state: RootState) => state.wihtelistSlice.data.paymentMethod
  );

  const acountSize = useSelector(
    (state: RootState) => state.wihtelistSlice.data.accountSize
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const address = formData.get("address");

    console.log(address);

    await updateDoc(doc(db, "whitelist", userId), {
      paymentInfo: {
        address,
        verified: false,
      },
    });
  };

  useEffect(() => {
    if (!userId) {
      router.push("/whitelist");
    }

    Object.entries(PAYMENT_METHODS).map(
      ([key, value]) => value.coin === method && setPaymentMethod(value)
    );
  }, []);

  return (
    <div className="custom-container relative">
      <div className="bg-[#131B35] text-white px-5 xs:px-10 sm:px-20 py-10 sm:py-20 rounded-xl mt-10 sm:mt-20">
        <div className="grid gap-8">
          <h2 className="text-3xl font-bold text-center">Make Payment</h2>
          <p className="text-center text-[#E6F3E680]">
            Copy the payment address is below
          </p>
          <div className="grid justify-items-center sm:grid-flow-col sm:w-max mx-auto gap-2 items-center">
            <p className="font-bold">{paymentMethod.coin}:</p>
            <p className="break-words text-center overflow-x-hidden w-full">
              {paymentMethod.address}
            </p>

            <button
              onClick={() => handleCopy(paymentMethod.address)}
              className="block relative w-7 ml-3"
            >
              <Image
                src={"/assets/icons/copy.png"}
                width={100}
                height={100}
                alt="Copy Icon"
              />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmitForm} className="mt-10">
          <div>
            <input
              type="text"
              placeholder="Address you are sending from *"
              name="address"
              required
              className="w-full py-4 sm:text-lg text-[#E6F3E6] bg-transparent outline-none border-b border-green-300 placeholder:text-[#E6F3E6] placeholder:opacity-50"
            />
            <p className="text-[#E6F3E680] mt-2 text-sm sm:text-base">
              Sender’s address is compulsory to verify sender and payment.
            </p>
          </div>

          <div className="grid gap-5 mt-20 max-w-md w-full mx-auto">
            <div className="grid grid-flow-col justify-between">
              <p className="text-[#E6F3E680]">Payment amount</p>
              <p className="text-xl font-semibold">
                ${parseInt(acountSize.registrationFee?.split("$").join("")) / 2}{" "}
                USD
              </p>
            </div>

            <Button variant="contained" className="py-4">
              I have made payment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
