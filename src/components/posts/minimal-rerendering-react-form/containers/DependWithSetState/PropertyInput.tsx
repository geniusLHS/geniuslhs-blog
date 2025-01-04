import Input from "../../components/Input";
import { usePropertyContext } from "./PropertyProvider";
import { InfoDepend } from "../../types";

export function PropertyInput({ property, ...props }: { property: keyof InfoDepend } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [value, setValue] = usePropertyContext();

  return (
    <Input
      placeholder={property}
      value={value}
      onChange={(e) =>
        setValue((value) => {
          const newValue = { ...value, [property]: e.target.value };

          if (value.name !== newValue.name) {
            newValue.copyName = newValue.name;
          }

          if (value.copyName !== newValue.copyName) {
            newValue.doubleCopyName = newValue.copyName;
          }

          return newValue;
        })
      }
      {...props}
    />
  );
}
