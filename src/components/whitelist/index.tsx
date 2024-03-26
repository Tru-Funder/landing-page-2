"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import AccountSummary from "./account-summary";
import Registration from "./registration";

export default function Whitelist() {
  const step = useSearchParams().get("step");

  switch (step) {
    case "account-summary":
      return <AccountSummary />;

    default:
      return <Registration />;
  }
}
