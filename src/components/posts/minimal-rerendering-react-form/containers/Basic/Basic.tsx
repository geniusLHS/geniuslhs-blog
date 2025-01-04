"use client";

import { useState } from "react";
import { Info } from "../../types";
import Div from "../../components/Div";
import Input from "../../components/Input";

export default function Basic() {
  const [info, setInfo] = useState<Info>({
    name: "",
    email: "",
    nickname: "",
    address: "",
  });

  return (
    <div className="flex flex-col items-center">
      <Div className="flex flex-col gap-4 p-4 rounded-md items-center !text-sm w-fit">
        <h1 className="!text-lg !font-semibold !my-0">Basic</h1>
        <Input className="p-1 rounded-md" type="text" placeholder="name" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
        <Input className="p-1 rounded-md" type="text" placeholder="email" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} />
        <Input
          className="p-1 rounded-md"
          type="text"
          placeholder="nickname"
          value={info.nickname}
          onChange={(e) => setInfo({ ...info, nickname: e.target.value })}
        />
        <Input
          className="p-1 rounded-md"
          type="text"
          placeholder="address"
          value={info.address}
          onChange={(e) => setInfo({ ...info, address: e.target.value })}
        />
      </Div>
    </div>
  );
}
