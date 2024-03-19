"use client";

import { RootState } from "@/store/index.store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

interface CardProps {
  icon: string;
  title: string;
}

export default function Card({ icon, title }: CardProps) {
  return (
    <div className="bg-[linear-gradient(160deg,_#42CF46,_#ffffff5c,_transparent)] p-1 rounded-2xl">
      <div
        className={`text-white w-full bg-[#41465C] h-[300px] p-6 rounded-2xl content-center grid gap-8 text-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]`}
      >
        <span className="relative block w-24 mx-auto rounded-lg overflow-hidden">
          <Image src={icon} width={1000} height={1000} alt="Evaluation Icon" />
        </span>

        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
}
