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
  { name: "TORP", explain: "종단간 암호화를 제공하는 채팅 서비스", src: "torp.png", href: "https://torp.geniuslhs.com", date: "2022.12" },
  { name: "OMOK", explain: "일대일 대결에 특화된 온라인 오목 서비스", src: "omok.png", href: "https://omok.geniuslhs.com", date: "2023.05" },
];

export const metadata: Metadata = {
  title: "geniusLHS",
  description: "게임 개발, 웹/앱 개발, 정보 보안에 관심을 가지고 있는 개발자 이현서입니다.",
  openGraph: {
    title: "geniusLHS",
    description: "게임 개발, 웹/앱 개발, 정보 보안에 관심을 가지고 있는 개발자 이현서입니다.",
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
        <p>사용자들에게 즐거운 경험을 제공하기 위해 고민합니다. </p>
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
