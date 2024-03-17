"use client";

import React, { Suspense } from "react";
import Evaluation from "./evaluation";
import Express from "./express";
import OneStep from "./one-step";
import { useSearchParams } from "next/navigation";

export default function Challenges() {
  const activeTab = useSearchParams().get("activeTab");

  switch (activeTab) {
    case "express":
      return <Express />;

    case "one-step":
      return <OneStep />;

    default:
      return <Evaluation />;
  }
}
