import Image from "next/image";
import React, { useState } from "react";

export default function MobileNavigation() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const toggleNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <>
      <button onClick={toggleNav} className="block lg:hidden relative w-8">
        <Image
          src={"/assets/icons/hamburger.svg"}
          width={50}
          height={50}
          alt="Hamburger Icon"
        />
      </button>

      <div
        className={`fixed top-0 w-screen h-screen bg-[#070E2A] py-5 px-5 sm:px-10 grid lg:hidden content-start transition-all ease-in-out ${
          isMobileNav ? "right-0" : "-right-[100vw]"
        }`}
      >
        <button
          onClick={toggleNav}
          className="block lg:hidden relative w-8 sm:w-10  justify-self-end"
        >
          <Image
            src={"/assets/icons/close.svg"}
            width={50}
            height={50}
            alt="Hamburger Icon"
          />
        </button>
      </div>
    </>
  );
}
