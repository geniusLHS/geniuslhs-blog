import Div from "../../components/Div";
import { createContext, useContext, useState } from "react";
import { Info } from "../../types";

const InfoContext = createContext<Info | null>(null);
const setInfoContext = createContext<React.Dispatch<React.SetStateAction<Info>> | null>(null);

export function InfoProvider({ children }: { children: React.ReactNode }) {
  const [info, setInfo] = useState<Info>({
    name: "",
    email: "",
    nickname: "",
    address: "",
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
