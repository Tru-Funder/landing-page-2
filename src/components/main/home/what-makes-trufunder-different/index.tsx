import React, { useState } from "react";
import SalaryRewardSystem from "./salary-reward-system";
import InstallmetalPayment from "./installmetal-payment";
import ResetAccount from "./reset-account";
import Consultation from "./consultation";
import Slide from "./slide";

export default function WhatMakesTruFunderDifferent() {
  return (
    <section className="bg-[#070E2A] py-24">
      <h2 className="text-5xl font-bold text-white text-center">
        What Makes
        <span className="text-yellow-600">Trufunder</span> Different
      </h2>

      <Slide />
    </section>
  );
}
