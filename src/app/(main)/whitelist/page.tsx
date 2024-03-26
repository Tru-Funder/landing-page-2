import Whitelist from "@/components/whitelist";
import Image from "next/image";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <section className=" pt-12 sm:pt-24 pb-44 bg-[#070E2A] layout-space relative overflow-hidden">
        {/* Background Images */}
        <span className="absolute w-28 sm:w-40 block left-[10%] top-12 opacity-40 md:opacity-80">
          <Image
            src={"/assets/bg-cardano.png"}
            width={1000}
            height={1000}
            alt="Background Icon"
          />
        </span>

        <span className="absolute w-96 hidden lg:block -right-20 top-10 opacity-50">
          <Image
            src={"/assets/bg-global-digital.png"}
            width={1000}
            height={1000}
            alt="Background Icon"
          />
        </span>

        <span className="absolute w-40 block -left-20 bottom-[500px] opacity-60">
          <Image
            src={"/assets/bg-rocket.png"}
            width={1000}
            height={1000}
            alt="Background Icon"
          />
        </span>

        <span className="absolute w-48 block -right-28 bottom-80 opacity-60">
          <Image
            src={"/assets/bg-rocket.png"}
            width={1000}
            height={1000}
            alt="Background Icon"
          />
        </span>

        <span className="absolute w-40 block left-1/2 -translate-x-1/2 bottom-20 opacity-40">
          <Image
            src={"/assets/bg-cardano.png"}
            width={1000}
            height={1000}
            alt="Background Icon"
          />
        </span>

        <Suspense>
          <Whitelist />
        </Suspense>
      </section>
    </main>
  );
}
