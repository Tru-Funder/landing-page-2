import * as React from "react";
import { BaseIconProps, ICONS } from "./@types";
import { Discord } from "./discord";

export interface IconProps extends BaseIconProps {
  types: ICONS;
}

export function Icon({ color, size, types }: IconProps) {
  switch (types) {
    case ICONS.Discord:
      return <Discord color={color} size={size} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
