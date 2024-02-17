"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  href: string;
  className: string;
  children: React.ReactNode;
};

const LinkNoPrefetch = ({ href, className, children }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default LinkNoPrefetch;
