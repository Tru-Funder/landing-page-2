import Image from "next/image";
import * as React from "react";
import Navigation from "./navigation";
import { Button } from "@/ui";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className={`absolute top-0 w-full z-50 py-6`}>
      <div
        className={`grid grid-cols-[auto_1fr_auto] items-center justify-items-center custom-container`}
      >
        <span className="block relative w-40">
          <Image
            src={"/assets/logo-colored.svg"}
            width={1000}
            height={1000}
            alt="TruFunder Logo"
            priority
          />
        </span>

        <Navigation />

        <Button variant="contained">Client Area</Button>
      </div>
    </header>
  );
}
