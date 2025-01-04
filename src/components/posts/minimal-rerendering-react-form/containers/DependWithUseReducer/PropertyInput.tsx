import Input from "../../components/Input";
import { usePropertyContext } from "./PropertyProvider";
import { InfoDepend } from "../../types";

export function PropertyInput({ property, ...props }: { property: keyof InfoDepend } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [value, dispatchValue] = usePropertyContext();

  return <Input placeholder={property} value={value} onChange={(e) => dispatchValue({ property, payload: e.target.value })} {...props} />;
}