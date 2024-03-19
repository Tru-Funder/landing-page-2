import Image from "next/image";
import React from "react";

export default function Consultation() {
  return (
    <div className="bg-[linear-gradient(160deg,_#42CF46,_#ffffff5c,_transparent)] p-1 rounded-2xl">
      <div className="text-white w-full bg-[#41465C] min-h-80 p-6 rounded-2xl content-start justify-items-center grid gap-4 text-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
        <span className="relative w-20">
          <Image
            src={"/assets/consultation.svg"}
            width={1000}
            height={1000}
            alt="Salary Reward System Icon"
          />
        </span>
        <h3 className="text-2xl font-bold max-w-lg">
          Unlock Profit Potential with Our Weekend Holding Feature and Expert
          Advisors
        </h3>
      </div>
    </div>
  );
}
