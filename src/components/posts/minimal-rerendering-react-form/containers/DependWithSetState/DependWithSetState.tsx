"use client";

import { InfoProvider } from "./InfoProvider";
import { PropertyProvider } from "./PropertyProvider";
import { PropertyInput } from "./PropertyInput";

export default function DependWithSetState() {
  return (
    <div className="flex flex-col items-center">
      <InfoProvider>
        <h1 className="!text-lg !font-semibold !my-0">Depend (setState)</h1>

        <PropertyProvider property="name">
          <PropertyInput className="p-1 rounded-md" type="text" property="name" />
        </PropertyProvider>

        <PropertyProvider property="copyName">
          <PropertyInput className="p-1 rounded-md" type="text" property="copyName" />
        </PropertyProvider>

        <PropertyProvider property="doubleCopyName">
          <PropertyInput className="p-1 rounded-md" type="text" property="doubleCopyName" />
        </PropertyProvider>
      </InfoProvider>
    </div>
  );
}
