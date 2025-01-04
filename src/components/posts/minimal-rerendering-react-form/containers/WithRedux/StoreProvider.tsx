import { Provider } from "react-redux";
import { store } from "./store";
import useRendererDetect from "../../hooks/useRerenderDetect";

export default function StoreProvider({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRendererDetect();
  return (
    <div ref={ref} {...props}>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
