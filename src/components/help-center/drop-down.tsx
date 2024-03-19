import Image from "next/image";
import React from "react";

interface DropDownProps {
  title: string;
}

export default function DropDown({ title }: DropDownProps) {
  return (
    <div className="bg-[linear-gradient(160deg,_#42CF46,_#ffffff5c,_transparent)] p-1">
      <div
        className={`text-white select-none w-full bg-[#41465C] px-6 py-4 content-center grid gap-8 text-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]`}
      >
        <div className="grid grid-flow-col items-center justify-between">
          <p>{title}</p>

          <span className="block relative w-5">
            <Image
              src={"/assets/down-arrow.svg"}
              width={1000}
              height={1000}
              alt="Down Arrow Icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
