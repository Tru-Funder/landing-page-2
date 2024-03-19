import Image from "next/image";
import React from "react";

export default function MeetTheTeam() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container">
        <div className="grid gap-3 justify-items-center text-white max-w-3xl text-center mx-auto">
          <p className="text-2xl w-max bg-clip-text text-transparent bg-[linear-gradient(92deg,_#02BC09_16.53%,_#007E04_85.83%)]">
            About Us
          </p>
          <h1 className="text-4xl font-bold">Meet The Team</h1>
          <p>
            we take our traders accomplishments seriously that&apos;s why we
            have come up with very robust strategies to ensure every trader
            trading with Trufunder is successful
          </p>
        </div>

        {/* Team Members */}
        <div className="w-[77vw] relative mx-auto mt-20">
          <span className="block absolute w-[18vw] top-1/2 -translate-y-1/2 left-0 overflow-hidden rounded-md">
            <Image
              src={"/assets/sample-member-1.png"}
              width={1000}
              height={1000}
              alt="Team Memeber Image"
            />
          </span>

          <span className="block relative w-[25vw] left-[16vw] z-30 overflow-hidden rounded-md">
            <Image
              src={"/assets/sample-member-2.png"}
              width={1000}
              height={1000}
              alt="Team Memeber Image"
            />
          </span>

          <span className="block absolute w-[18vw] top-1/2 -translate-y-1/2 z-20 left-[40vw] overflow-hidden rounded-md">
            <Image
              src={"/assets/sample-member-3.png"}
              width={1000}
              height={1000}
              alt="Team Memeber Image"
            />
          </span>

          <span className="block absolute w-[20vw] top-1/2 -translate-y-1/2 left-[57vw] overflow-hidden rounded-md">
            <Image
              src={"/assets/sample-member-4.png"}
              width={1000}
              height={1000}
              alt="Team Memeber Image"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
