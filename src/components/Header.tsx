"use client";

import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { MenuIcon } from "@/styles/SvgIcons";
import { useScrollTop } from "@/hooks/useScrollTop";
import Image from "next/image";
import LogoIcon from "public/favicon.ico";

export default function Header() {
  const pathname = usePathname();
  const upperPath = pathname.split("/")[1];

  const [isOpen, setIsOpen] = useState<boolean>();
  const isScrolled = useScrollTop();

  const isClickOuter = (e: MouseEvent<HTMLDivElement>) => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="flex w-full select-none items-end">
      <div className="flex items-center gap-1 ">
        <Link href="/" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-2 py-1.5 mr-2">
          <Image src={LogoIcon} alt="logo" width={30} height={30} />
        </Link>
        <Link href="/" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-2 py-0.5">
          Home
        </Link>
        <Link href="/blog" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-2 py-0.5">
          Blog
        </Link>
        <Link href="/activity" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-2 py-0.5">
          Activity
        </Link>
      </div>
      <div className="ml-auto flex gap-2 items-center"></div>
    </nav>
  );
}
