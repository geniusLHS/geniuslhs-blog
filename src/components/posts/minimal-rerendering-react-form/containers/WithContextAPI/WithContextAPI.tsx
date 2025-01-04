"use client";

import { InfoProvider } from "./InfoProvider";
import { PropertyProvider } from "./PropertyProvider";
import { PropertyInput } from "./PropertyInput";

export default function WithContextAPI() {
  return (
    <div className="flex flex-col items-center">
      <InfoProvider>
        <h1 className="!text-lg !font-semibold !my-0">Context API</h1>

        <PropertyProvider property="name">
          <PropertyInput className="p-1 rounded-md" type="text" property="name" />
        </PropertyProvider>

        <PropertyProvider property="nickname">
          <PropertyInput className="p-1 rounded-md" type="text" property="nickname" />
        </PropertyProvider>

        <PropertyProvider property="email">
          <PropertyInput className="p-1 rounded-md" type="text" property="email" />
        </PropertyProvider>

        <PropertyProvider property="address">
          <PropertyInput className="p-1 rounded-md" type="text" property="address" />
        </PropertyProvider>
      </InfoProvider>
    </div>
  );
}
