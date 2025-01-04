import { createContext, useContext } from "react";
import { useInfoContext, useSetInfoContext } from "./InfoProvider";
import { Info } from "../../types";

const PropertyContext = createContext<string | null>(null);

export function PropertyProvider({ property, children }: { property: keyof Info; children: React.ReactNode }) {
  const info = useInfoContext();

  return <PropertyContext.Provider value={info[property]}>{children}</PropertyContext.Provider>;
}

export function usePropertyContext() {
  const context = useContext(PropertyContext);
  const setInfoContext = useSetInfoContext();

  if (context === null) {
    throw new Error("usePropertyContext must be used within an PropertyProvider");
  }
  return [context, setInfoContext] as const;
}
