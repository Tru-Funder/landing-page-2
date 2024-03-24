"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface NaivgationLinkProps {
  title: string;
  url: string;
  onClick?: () => void;
}

export default function NaivgationLink({
  onClick,
  title,
  url,
}: NaivgationLinkProps) {
  const path = usePathname();
  const activeLinkClass =
    path === url
      ? "text-white bg-green-300 py-3 px-4 rounded-md lg:p-0 lg:bg-transparent lg:text-green-300"
      : "text-white rounded-md hover:py-3 hover:px-4 lg:hover:p-0 hover:bg-green-300 lg:hover:bg-transparent lg:hover:text-green-100";

  return (
    <Link
      href={url}
      onClick={onClick}
      className={`transiton-all duration-300 ease-in-out ${activeLinkClass}`}
    >
      {title}
    </Link>
  );
}
