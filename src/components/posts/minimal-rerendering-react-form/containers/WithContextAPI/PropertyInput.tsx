import Input from "../../components/Input";
import { usePropertyContext } from "./PropertyProvider";
import { Info } from "../../types";

export function PropertyInput({ property, ...props }: { property: keyof Info } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [value, setValue] = usePropertyContext();

  return <Input placeholder={property} value={value} onChange={(e) => setValue((value) => ({ ...value, [property]: e.target.value }))} {...props} />;
}
