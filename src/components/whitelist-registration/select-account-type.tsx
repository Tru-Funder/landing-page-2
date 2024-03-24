"use client";

import { ACCOUNT_TYPES } from "@/constants/whitelist-registration";
import Image from "next/image";
import React, { useState } from "react";

export default function SelectAccountType() {
  const [value, setValue] = useState("");
  const [isDropDown, setIsDropDown] = useState(false);

  const handleSelectOption = (option: string) => {
    setValue(option);
    setIsDropDown(false);
  };

  return (
    <div className="relative">
      <div className="border-b w-full border-green-300 py-4 grid grid-cols-[1fr_auto] items-center gap-3">
        <input
          type="text"
          placeholder="Account Type"
          disabled
          value={value}
          className="w-full text-lg sm:text-xl capitalize text-[#E6F3E6] bg-transparent outline-none placeholder:text-[#E6F3E6] placeholder:opacity-50"
        />

        <button type="button" onClick={() => setIsDropDown(!isDropDown)}>
          {isDropDown ? (
            <span className="block relative w-3 sm:w-4">
              <Image
                src={"/assets/icons/arrow-filled-down.svg"}
                width={100}
                height={100}
                alt="Arrow Down Icon"
              />
            </span>
          ) : (
            <span className="block relative w-2 sm:w-3">
              <Image
                src={"/assets/icons/arrow-filled-right.svg"}
                width={100}
                height={100}
                alt="Arrow Right Icon"
              />
            </span>
          )}
        </button>
      </div>

      <div
        className={`absolute w-full rounded-lg z-10 bg-[#070F2A] text-white transition-all overflow-hidden duration-300 ${
          isDropDown ? "max-h-96 mt-5 " : "max-h-0 m-0"
        }`}
      >
        {ACCOUNT_TYPES.map((type, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSelectOption(type)}
            className={`py-5 px-10 block w-full capitalize text-left transition-all ${
              value === type ? "bg-green-300" : "hover:text-green-200"
            }`}
          >
            {type.split("-").join(" ")}
          </button>
        ))}
      </div>
    </div>
  );
}
