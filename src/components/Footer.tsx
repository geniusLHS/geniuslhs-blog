"use client";

import { GithubIcon } from "@/styles/SvgIcons";

export default function Footer() {
  return (
    <footer className="mt-5 w-full border-t border-t-[#898ea4] pt-3 pb-6 text-center text-sm">
      <div className="flex justify-center items-center text-[#666]">
        © 2024 geniusLHS
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
