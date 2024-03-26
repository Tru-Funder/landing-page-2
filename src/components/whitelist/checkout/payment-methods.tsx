import { PAYMENT_METHODS } from "@/constants/payment-methods";
import { RootState } from "@/store/index.store";
import { setWhitelistUserPaymentMethod } from "@/store/slices/whitelist";
import { Button } from "@/ui";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PaymentMethods() {
  const dispatch = useDispatch();

  const paymentMethod = useSelector(
    (state: RootState) => state.wihtelistSlice.data.paymentMethod
  );

  const handleSelectPaymentMethod = (coin: string) => {
    dispatch(setWhitelistUserPaymentMethod(coin));
  };

  useEffect(() => {
    dispatch(setWhitelistUserPaymentMethod(PAYMENT_METHODS.btc.coin));
  }, []);

  return (
    <div className="w-full bg-[#131B35] p-10 grid gap-10 rounded-xl relative">
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

      <Link href={"/whitelist?step=make-payment"} className="grid">
        <Button variant="contained" className="py-4">
          Make Payment
        </Button>
      </Link>
    </div>
  );
}