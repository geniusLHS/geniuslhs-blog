import { phrases } from "@/data/phrases";
import SubHeader from "@/components/SubHeader";
import WorkItem from "@/components/WorkItem";
import type { Metadata } from "next";

let GameItems = [
  {
    name: "Symmetry Lines",
    explain: "Simple puzzle game about symmetry and lines.",
    src: "symmetry-lines.png",
    href: "https://store.steampowered.com/app/1983540/Symmetry_Lines/",
  },
];
let webAppDevItems = [
  { name: "TORP", explain: "end-to-end ecrypted chat app", src: "torp.png", href: "https://torp.geniuslhs.com" },
  { name: "OMOK", explain: "omok service for one-on-one competition", src: "omok.png", href: "https://omok.geniuslhs.com" },
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
    <>
      <section className="pt-14 pb-14 border-b border-b-[#898ea4]">
        <div className="text-3xl font-bold pb-5">geniusLHS</div>
        <div className="text-lg">
          반갑습니다. 이현서입니다. <br />
          게임 개발, 웹/앱 개발, 정보 보안에 관심을 가지고 있습니다.
        </div>
      </section>
      <div className="space-y-8 pt-10">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold"> Games </h1>
          {GameItems.map((item, idx) => (
            <WorkItem item={item}></WorkItem>
          ))}
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold"> Web / App dev </h1>
          {webAppDevItems.map((item, idx) => (
            <WorkItem key={idx} item={item}></WorkItem>
          ))}
        </div>
      </div>
    </>
  );
}
