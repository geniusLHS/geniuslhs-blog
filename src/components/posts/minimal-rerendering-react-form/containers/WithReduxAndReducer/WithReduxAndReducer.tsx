"use client";

import { PropertyInput } from "./PropertyInput";
import StoreProvider from "./StoreProvider";

export default function WithRedux() {
  return (
    <div className="flex flex-col items-center">
      <StoreProvider className="flex flex-col gap-4 p-4 rounded-md items-center !text-sm w-fit">
        <h1 className="!text-lg !font-semibold !my-0">Redux</h1>
        <PropertyInput className="p-1 rounded-md" type="text" property="name" />
        <PropertyInput className="p-1 rounded-md" type="text" property="copyName" />
        <PropertyInput className="p-1 rounded-md" type="text" property="doubleCopyName" />
      </StoreProvider>
    </div>
  );
}
