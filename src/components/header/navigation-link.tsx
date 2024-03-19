"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface NaivgationLinkProps {
  title: string;
  url: string;
}

export default function NaivgationLink({ title, url }: NaivgationLinkProps) {
  const path = usePathname();
  const activeLinkClass =
    path === url ? "text-green-300" : "text-white hover:text-green-100";

  return (
    <Link href={url} className={`transiton-all ${activeLinkClass}`}>
      {title}
    </Link>
  );
}
