import { phrases } from "@/data/phrases";
import ProjectItem from "@/components/ProjectItem";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "public/favicon.ico";

let ProjectItems = [
  {
    name: "Symmetry Lines",
    explain: "대칭 이동만으로 목표를 달성해야 하는 퍼즐 게임",
    src: "symmetry-lines.png",
    href: "https://store.steampowered.com/app/1983540/Symmetry_Lines/",
    date: "2021.12",
  },
  {
    name: "Interactive React Hooks Quiz",
    explain: "리액트 훅의 개념을 상호작용 가능한 퀴즈와 함께 학습할 수 있는 웹사이트",
    src: "irhq.svg",
    href: "https://irhq.geniuslhs.com",
    date: "2024.08",
  },
];

export const metadata: Metadata = {
  title: "geniusLHS",
  description: "이현서 개발 블로그",
  openGraph: {
    title: "geniusLHS",
    description: "이현서 개발 블로그",
    images: ["https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true"],
    url: "https://geniuslhs.com",
    type: "website",
    siteName: "geniusLHS",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="pt-3 md:pt-6">
        <div className="text-lg">
          <Image src={LogoIcon} alt="logo" width={20} height={20} className="inline mr-2" />
          geniusLHS
        </div>
        <br />
        <p>반갑습니다. 이현서입니다.</p>
        <p>복잡한 개념을 추상화하여 단순한 수학적 모델로 표현하는 것을 좋아합니다.</p>
        <br />
        <p>
          제 작업들을 <Link href="/blog">블로그</Link>에 기록합니다. 때때로 코드를&nbsp;
          <a href="https://github.com/geniuslhs" target="_blank" rel="noopener">
            Github
          </a>
          에 공개합니다.
        </p>
      </div>
      <div>
        <p className="pb-1">프로젝트</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
          {ProjectItems.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div>
        <p className="pb-1">기술</p>
        <ul className="list-disc ml-5">
          <li>Next.js, React, Typescript</li>
          <li>Node.js, supabase</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div className="">
        <p className="pb-1">학력</p>
        <div className="flex flex-row">
          <div className="w-9 h-9 my-0.5 mr-2">
            <img src={`image/snu.svg`} className="w-full" alt="snu" />
          </div>
          <div className="leading-snug">
            <p>서울대학교 자유전공학부</p>
            <span className="text-[#888] text-sm">2023.03 ~ 재학 중</span>
          </div>
        </div>
      </div>
    </div>
  );
}
