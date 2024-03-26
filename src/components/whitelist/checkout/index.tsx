import React from "react";
import PaymentMethods from "./payment-methods";
import AccountSize from "./account-size";

export default function Checkout() {
  return (
    <div className="custom-container relative">
      <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-white">
        Checkout
      </h2>

      <div className="grid grid-cols-2 gap-10 items-start mt-20">
        <PaymentMethods />
        <AccountSize />
      </div>
    </div>
  );
}
