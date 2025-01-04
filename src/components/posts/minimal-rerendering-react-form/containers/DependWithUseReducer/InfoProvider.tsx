import Div from "../../components/Div";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Action, InfoDepend } from "../../types";
import { infoReducer } from "./infoReducer";

const InfoContext = createContext<InfoDepend | null>(null);
const setInfoContext = createContext<React.Dispatch<Action> | null>(null);

export function InfoProvider({ children }: { children: React.ReactNode }) {
  const [info, dispatchInfo] = useReducer(infoReducer, {
    name: "",
    copyName: "",
    doubleCopyName: "",
  });

  return (
    <InfoContext.Provider value={info}>
      <setInfoContext.Provider value={dispatchInfo}>
        <Div className="flex flex-col gap-4 p-4 rounded-md items-center !text-sm w-fit">{children}</Div>
      </setInfoContext.Provider>
    </InfoContext.Provider>
  );
}

export function useInfoContext() {
  const context = useContext(InfoContext);
  if (context === null) {
    throw new Error("useInfo must be used within an InfoProvider");
  }
  return context;
}

export function useSetInfoContext() {
  const context = useContext(setInfoContext);
  if (context === null) {
    throw new Error("useSetInfo must be used within an InfoProvider");
  }
  return context;
}
