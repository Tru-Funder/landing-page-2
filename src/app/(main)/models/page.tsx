import Models from "@/components/models";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Models />
    </Suspense>
  );
}
