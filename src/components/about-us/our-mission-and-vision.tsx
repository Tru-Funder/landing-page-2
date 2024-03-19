import Image from "next/image";
import React from "react";

export default function OurMissionAndVision() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container grid grid-cols-2 gap-20">
        {/* Our Mission */}
        <div className="bg-[linear-gradient(90deg,_#42CF46,_#ffffff5c,_transparent)] p-1 rounded-2xl h-max">
          <div
            className={`text-white w-full bg-[#41465C] p-6 rounded-2xl grid gap-8 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]`}
          >
            <div className="grid grid-flow-col w-max items-center gap-2">
              <span className="relative block w-8 mx-auto rounded-lg overflow-hidden">
                <Image
                  src={"/assets/rocket.svg"}
                  width={1000}
                  height={1000}
                  alt="Rocket Icon"
                />
              </span>

              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>

            <p>
              we take our traders accomplishments seriously that&apos;s why we
              have come up with very robust strategies to ensure every trader
              trading with Trufunder is successful we take our traders
              accomplishments seriously that&apos;s why we have come up with
              very robust strategies to ensure every trader trading with
              Trufunder is successfulwe take our traders accomplishments
              seriously that&apos;s why we have come up with very robust
              strategies to ensure every trader trading with Trufunder is
              successfulwe take our traders accomplishments seriously
              that&apos;s why we have come up with very robust strategies to
              ensure every trader trading with Trufunder is successfulwe take
              our traders accomplishments seriously that&apos;s why we have come
              up with very robust strategies to ensure every trader trading with
              Trufunder is successfulwe take our traders accomplishments
              seriously that&apos;s why we have come up with very robust
              strategies to ensure every trader trading with Trufunder is
              successful
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-[linear-gradient(90deg,_#42CF46,_#ffffff5c,_transparent)] p-1 rounded-2xl mt-20">
          <div
            className={`text-white w-full bg-[#41465C] p-6 rounded-2xl grid gap-8 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]`}
          >
            <div className="grid grid-flow-col w-max items-center gap-2">
              <span className="relative block w-8 mx-auto rounded-lg overflow-hidden">
                <Image
                  src={"/assets/eye.svg"}
                  width={1000}
                  height={1000}
                  alt="Rocket Icon"
                />
              </span>

              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>

            <p>
              we take our traders accomplishments seriously that&apos;s why we
              have come up with very robust strategies to ensure every trader
              trading with Trufunder is successful we take our traders
              accomplishments seriously that&apos;s why we have come up with
              very robust strategies to ensure every trader trading with
              Trufunder is successfulwe take our traders accomplishments
              seriously that&apos;s why we have come up with very robust
              strategies to ensure every trader trading with Trufunder is
              successfulwe take our traders accomplishments seriously
              that&apos;s why we have come up with very robust strategies to
              ensure every trader trading with Trufunder is successfulwe take
              our traders accomplishments seriously that&apos;s why we have come
              up with very robust strategies to ensure every trader trading with
              Trufunder is successfulwe take our traders accomplishments
              seriously that&apos;s why we have come up with very robust
              strategies to ensure every trader trading with Trufunder is
              successful
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
