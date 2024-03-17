import Challenges from "@/components/main/challenges";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Challenges />
    </Suspense>
  );
}
