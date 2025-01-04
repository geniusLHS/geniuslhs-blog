import { cn } from "@/lib/utils";
import useRenderNotifyAnchor from "../hooks/useRerenderDetect";

export default function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  const ref = useRenderNotifyAnchor();

  return <input ref={ref} {...props} className={cn("focus:outline-none focus:border-transparent focus:ring-0", props.className)} />;
}
