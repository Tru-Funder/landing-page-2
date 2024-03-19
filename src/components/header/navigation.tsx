import { NAVIGATIONS } from "@/constants/navigation";
import * as React from "react";
import NaivgationLink from "./navigation-link";

export default function Navigation() {
  return (
    <nav className="grid grid-flow-col gap-10 w-max">
      {NAVIGATIONS.map((nav, i) => (
        <NaivgationLink key={i} title={nav.title} url={nav.url} />
      ))}
    </nav>
  );
}
