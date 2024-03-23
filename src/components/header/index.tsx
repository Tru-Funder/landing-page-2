"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@/ui";
import { usePathname } from "next/navigation";
import MobileNavigation from "./mobile-navigation";
import Navigation from "./navigation";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const path = usePathname();
  return (
    <header
      className={`layout-space ${
        path === "/" ? "absolute" : "relative bg-[#070F2A]"
      } top-0 w-full z-50 py-6`}
    >
      <div
        className={`grid items-center justify-items-center relativ custom-container grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto]`}
      >
        <span className="block relative w-40">
          <Image
            src={"/assets/logo-colored.svg"}
            width={200}
            height={200}
            alt="TruFunder Logo"
            priority
          />
        </span>

        <React.Suspense>
          <Navigation />
        </React.Suspense>

        <MobileNavigation />

        <Button variant="contained" className="hidden lg:grid">
          Client Area
        </Button>
      </div>
    </header>
  );
}
