import Models from "@/components/models";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <Suspense>
        <Models />
      </Suspense>
    </main>
  );
}
