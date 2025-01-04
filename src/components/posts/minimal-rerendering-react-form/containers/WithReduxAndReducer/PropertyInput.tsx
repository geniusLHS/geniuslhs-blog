import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setInfo } from "./redux";
import { InfoDepend } from "../../types";

export function PropertyInput({ property, ...props }: { property: keyof InfoDepend } & React.InputHTMLAttributes<HTMLInputElement>) {
  const value = useSelector((state: RootState) => state.info[property]);
  const dispatch = useDispatch();

  return <Input placeholder={property} value={value} onChange={(e) => dispatch(setInfo({ property, value: e.target.value }))} {...props} />;
}
