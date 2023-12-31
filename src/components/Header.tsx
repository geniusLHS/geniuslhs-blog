'use client';

import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { usePathname } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import { MenuIcon } from '@/styles/SvgIcons';
import { useScrollTop } from '@/hooks/useScrollTop';
import Image from 'next/image';
import LogoIcon from 'public/favicon.ico';

export default function Header() {
  const pathname = usePathname();
  const upperPath = pathname.split('/')[1];

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
      <div className="flex items-end">
        <Link href="/" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-3 py-1.5 mr-2">
          <Image src={LogoIcon} alt="logo" width={30} height={30} />
        </Link>
        <Link href="/" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-3.5 py-1.5">
          Home
        </Link>
        <Link href="/blog" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-3.5 py-1.5">
          Blog
        </Link>
        <Link href="/activity" className="flex items-center rounded-lg transition-all hover:bg-[#EDEDED] text-lg px-3.5 py-1.5">
          Activity
        </Link>
      </div>
      {/* {isMobileWidth ? (
          <>
            <div className={`${styles.mobileCategoryBack} ${isOpen ? styles.blurOn : ''}`} onClick={isClickOuter}></div>
            <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
              <div className={styles.mobileCategoryWrapper}>
                <h3>
                  <Link href="/" className={upperPath === '' ? styles.currentPage : ''}>
                    Home
                  </Link>
                </h3>
                <h3>
                  <Link href="/blog" className={upperPath === 'project' ? styles.currentPage : ''}>
                    Blog
                  </Link>
                </h3>
                <h3>
                  <Link href="/activity" className={upperPath === 'post' ? styles.currentPage : ''}>
                    Activity
                  </Link>
                </h3>
              </div>
            </div>
          </>
        ) : undefined} */}
      <div className="ml-auto flex gap-2 items-center"></div>
    </nav>
  );
}
