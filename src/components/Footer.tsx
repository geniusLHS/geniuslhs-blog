'use client';

import { GithubIcon } from '@/styles/SvgIcons';

export default function Footer() {
  return (
    <footer className="mt-10 w-full border-t border-t-[#898ea4] pt-10 text-center text-sm text-gray-500">
      <div className="flex justify-center items-center">
        © 2023 geniusLHS
        <a
          className="flex justify-center items-center rounded-full mx-2 p-2 transition-all cursor-pointer hover:bg-gray-100"
          href="https://github.com/geniuslhs"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon width={16} height={16} color="#797979" />
        </a>
      </div>
    </footer>
  );
}
