import { Suspense } from "react";

import ComponentsOne from "./_components/ComponentsOne";
import ComponetsTwo from "./_components/ComponetsTwo";
import CardLoading from "./_components/CardLoading";
import CardError from "./_components/CardError";

import ErrorBoundary from "@/src/components/ErrorBoundary";

export default function suspense() {
  return (
    <div className="grid w-[90%] mx-auto gap-12 grid-cols-2 mt-20">
      <ErrorBoundary fallback={<CardError />}>
        <Suspense fallback={<CardLoading />}>
          <ComponentsOne />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={<CardLoading />}>
        <ComponetsTwo />
      </Suspense>
    </div>
  );
}
