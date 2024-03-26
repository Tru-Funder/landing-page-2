"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import AccountSummary from "./account-summary";
import Registration from "./registration";
import Checkout from "./checkout";
import MakePayment from "./make-payment";
import ConfirmingPayment from "./confirming-payment";

export default function Whitelist() {
  const step = useSearchParams().get("step");

  switch (step) {
    case "account-summary":
      return <AccountSummary />;

    case "checkout":
      return <Checkout />;

    case "confirming-payment":
      return <ConfirmingPayment />;

    case "make-payment":
      return <MakePayment />;

    default:
      return <Registration />;
  }
}
