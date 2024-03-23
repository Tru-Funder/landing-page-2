"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ModelsDropdown() {
  const path = usePathname().split("/")[1];
  const activeTab = useSearchParams().get("activeTab");

  const [isDropDown, setIsDropDown] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const activeLinkClass =
    path === "/models" ? "text-green-300" : "text-white hover:text-green-100";

  const handleToggleDropDowm = () => {
    setIsDropDown(!isDropDown);
  };

  useEffect(() => {
    path !== "models" && setIsDropDown(false);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        !isScroll && setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, [path]);

  return (
    <div>
      <button
        onClick={handleToggleDropDowm}
        className={`transiton-all ${activeLinkClass}`}
      >
        Models
      </button>

      <div className={`${isScroll ? "hidden" : "block"}`}>
        {/* dark bg */}
        <div
          className={`fixed w-screen h-screen top-20 left-0 bg-[rgba(0,0,0,0.8)] z-10 transition-all ${
            isDropDown ? "visible" : "invisible"
          }`}
        ></div>

        <div
          className={`w-48 fixed z-20 top-20 bg-[#070F2A] text-white transition-all overflow-hidden duration-300 ${
            isDropDown ? "max-h-96" : "max-h-0"
          }`}
        >
          <Link
            href={"models?activeTab=evaluation"}
            onClick={handleToggleDropDowm}
            className={`p-5 block transition-all ${
              path === "models" && activeTab === "evaluation"
                ? "bg-green-300"
                : "hover:text-green-200"
            }`}
          >
            Evaluation
          </Link>

          <Link
            href={"models?activeTab=express"}
            onClick={handleToggleDropDowm}
            className={`p-5 block transition-all ${
              path === "models" && activeTab === "express"
                ? "bg-green-300"
                : "hover:text-green-200"
            }`}
          >
            Express
          </Link>

          <Link
            href={"models?activeTab=one-step"}
            onClick={handleToggleDropDowm}
            className={`p-5 block transition-all ${
              path === "models" && activeTab === "one-step"
                ? "bg-green-300"
                : "hover:text-green-200"
            }`}
          >
            One Step
          </Link>
        </div>
      </div>
    </div>
  );
}
