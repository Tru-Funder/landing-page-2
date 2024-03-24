import { NAVIGATIONS } from "@/constants/navigation";
import Image from "next/image";
import React, { useState } from "react";
import ModelsDropdown from "./models-dropdown";
import NaivgationLink from "./navigation-link";

export default function MobileNavigation() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const toggleNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <>
      <button onClick={toggleNav} className="block lg:hidden relative w-8">
        <Image
          src={"/assets/icons/menu.svg"}
          width={50}
          height={50}
          alt="Hamburger Icon"
        />
      </button>

      <div
        className={`fixed top-0 w-full h-screen bg-[#070E2A] py-5 px-5 xs:p-10 grid lg:hidden content-start transition-all ease-in-out ${
          isMobileNav ? "right-0" : "-right-[100vw]"
        }`}
      >
        <div className="grid items-center grid-flow-col justify-between">
          <span className="block relative w-44">
            <Image
              src={"/assets/logo-colored.svg"}
              width={200}
              height={200}
              alt="TruFunder Logo"
              priority
            />
          </span>
          <button
            onClick={toggleNav}
            className="block lg:hidden relative w-8 xs:w-10"
          >
            <Image
              src={"/assets/icons/close.svg"}
              width={50}
              height={50}
              alt="Hamburger Icon"
            />
          </button>
        </div>

        <nav className="grid gap-10 w-full mt-20">
          {NAVIGATIONS.map((nav, i) =>
            nav.title === "Models" ? (
              <ModelsDropdown key={i} />
            ) : (
              <NaivgationLink
                key={i}
                title={nav.title}
                url={nav.url}
                onClick={() => setIsMobileNav(false)}
              />
            )
          )}
        </nav>
      </div>
    </>
  );
}
