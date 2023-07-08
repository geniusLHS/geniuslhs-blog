'use client';

interface lProps {
  item: { href: string; src: string; name: string; explain: string };
}

const WorkItem = ({ item }: lProps) => {
  return (
    <a target="_blank" href={item.href} className="w-full rounded-lg transition-all p-6 flex items-center gap-4 bg-[#f8f8f8] hover:hover:bg-[#efefef]">
      <img className="h-12 w-12 rounded-lg" src={`image/${item.src}`}></img>
      <div className="">
        <p className="font-bold">{item.name}</p>
        <p>{item.explain}</p>
      </div>
    </a>
  );
};

export default WorkItem;
