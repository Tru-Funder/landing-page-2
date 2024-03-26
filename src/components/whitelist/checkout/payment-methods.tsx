import { db } from "@/config/firebase";
import { PAYMENT_METHODS } from "@/constants/payment-methods";
import { RootState } from "@/store/index.store";
import { setWhitelistUserPaymentMethod } from "@/store/slices/whitelist";
import { Button } from "@/ui";
import { doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PaymentMethods() {
  const dispatch = useDispatch();
  const router = useRouter();

  const userId = useSelector(
    (state: RootState) => state.wihtelistSlice.data.userId
  );

  const paymentMethod = useSelector(
    (state: RootState) => state.wihtelistSlice.data.paymentMethod
  );

  const accountSize = useSelector(
    (state: RootState) => state.wihtelistSlice.data.accountSize
  );

  const handleMakePayment = async () => {
    await updateDoc(doc(db, "whitelist", userId), {
      paymentInfo: {
        address: "",
        verified: false,
        accountSize: accountSize.size,
        amountPaid: `${
          parseInt(accountSize.registrationFee.split("$").join("")) / 2
        }
        `,
      },
    });

    router.push("/whitelist?step=make-payment");
  };

  const handleSelectPaymentMethod = (coin: string) => {
    dispatch(setWhitelistUserPaymentMethod(coin));
  };

  useEffect(() => {
    dispatch(setWhitelistUserPaymentMethod(PAYMENT_METHODS.btc.coin));
  }, []);

  return (
    <div className="w-full bg-[#131B35] p-6 xs:p-10 grid gap-10 rounded-xl relative order-1 lg:order-none">
      <h3 className="text-[#E6F3E680] text-2xl">Payment Methods</h3>

      <div className="grid gap-5">
        {Object.entries(PAYMENT_METHODS).map(([key, m]) => (
          <button
            key={key}
            onClick={() => handleSelectPaymentMethod(m.coin)}
            className={`grid grid-cols-[auto_1fr] gap-5 items-center w-full text-left rounded-lg p-3 text-white bg-[#070F2A] transition-all duration-300 border border-transparent hover:border-white ${""}`}
          >
            <span
              className={`block w-5 h-5 border rounded-full border-[#437EF7] ${
                paymentMethod === m.coin && "p-1"
              }`}
            >
              <span
                className={`block w-full h-full rounded-full  ${
                  paymentMethod === m.coin ? "bg-[#437EF7]" : "bg-white"
                }`}
              ></span>
            </span>

            <p className="font-medium text-xl">{m.coin}</p>
          </button>
        ))}
      </div>

      <Button onClick={handleMakePayment} variant="contained" className="py-4">
        Make Payment
      </Button>
    </div>
  );
}
