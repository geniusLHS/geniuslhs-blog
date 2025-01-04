import Div from "../../components/Div";
import { createContext, useContext, useEffect, useState } from "react";
import { InfoDepend } from "../../types";

const InfoContext = createContext<InfoDepend | null>(null);
const setInfoContext = createContext<React.Dispatch<React.SetStateAction<InfoDepend>> | null>(null);

export function InfoProvider({ children }: { children: React.ReactNode }) {
  const [info, setInfo] = useState<InfoDepend>({
    name: "",
    copyName: "",
    doubleCopyName: "",
  });

  return (
    <InfoContext.Provider value={info}>
      <setInfoContext.Provider value={setInfo}>
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
