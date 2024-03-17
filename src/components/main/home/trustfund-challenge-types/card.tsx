"use client";

import { RootState } from "@/store/index.store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

interface CardProps {
  content: string;
  icon: string;
  title: string;
}

export default function Card({ content, icon, title }: CardProps) {
  const currentTab = useSelector(
    (state: RootState) => state.truFunderChallengeTypesSlice.data
  );

  return (
    <div
      className={`text-white w-full bg-[rgba(245,_245,_245,_0.13)] h-[360px] p-6 rounded-2xl content-center grid gap-8 text-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]`}
    >
      <div
        className={`rounded-xl w-16 h-16 grid items-center justify-items-center mx-auto transition-all ${
          currentTab === title ? "bg-green-300" : "bg-white"
        } `}
      >
        <span className="relative block w-8">
          <Image src={icon} width={1000} height={1000} alt="Evaluation Icon" />
        </span>
      </div>

      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="max-w-sm mx-auto">{content}</p>
    </div>
  );
}
