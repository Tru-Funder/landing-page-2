import { NAVIGATIONS } from "@/constants/navigation";
import * as React from "react";
import NaivgationLink from "./navigation-link";
import ModelsDropdown from "./models-dropdown";

export default function Navigation() {
  return (
    <nav className="grid-flow-col gap-10 w-max hidden lg:grid">
      {NAVIGATIONS.map((nav, i) =>
        nav.title === "Models" ? (
          <ModelsDropdown key={i} />
        ) : (
          <NaivgationLink key={i} title={nav.title} url={nav.url} />
        )
      )}
    </nav>
  );
}
