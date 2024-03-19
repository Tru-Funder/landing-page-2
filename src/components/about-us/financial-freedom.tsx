import Image from "next/image";
import React from "react";

export default function FinancialFreedom() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container bg-[linear-gradient(90deg,_#42CF46,_#ffffff5c,_transparent)] p-1 rounded-2xl">
        <div
          className={`text-white w-full bg-[#41465C] p-8 rounded-2xl grid gap-8 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]`}
        >
          <h2 className="text-3xl font-bold max-w-sm">
            We Empower Traders with{" "}
            <span className="w-max bg-clip-text text-transparent bg-[linear-gradient(92deg,_#02BC09_16.53%,_#007E04_85.83%)]">
              Financial Freedom
            </span>
          </h2>

          <div className="grid grid-cols-[auto_1fr] gap-10">
            <span className="block relative w-[300px] overflow-hidden rounded-md">
              <Image
                src={"/assets/sample-member-2.png"}
                width={1000}
                height={1000}
                alt="Team Memeber Image"
              />
            </span>

            <div className="grid gap-2">
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
                our traders accomplishments seriously that&apos;s why we have
                come up with very robust strategies to ensure every trader
                trading with Trufunder is successfulwe take our traders
                accomplishments seriously that&apos;s why we have come up with
                very robust strategies to ensure every trader trading with
                Trufunder is successful
              </p>

              <span className="block relative w-20 overflow-hidden rounded-md">
                <Image
                  src={"/assets/signature.svg"}
                  width={1000}
                  height={1000}
                  alt="Team Memeber Image"
                />
              </span>

              <p>Adebayo Emmanuel/ CEO Trufunder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
