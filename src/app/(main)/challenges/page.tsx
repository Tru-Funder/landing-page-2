import Challenges from "@/components/challenges";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Challenges />
    </Suspense>
  );
}
