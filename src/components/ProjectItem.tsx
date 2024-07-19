interface lProps {
  item: { href: string; src: string; name: string; explain: string; date: string };
}

const WorkItem = ({ item }: lProps) => {
  return (
    <div className="flex flex-row">
      <div className="w-9 h-9 my-1.5 mr-3">
        <img src={`image/${item.src}`} className="w-full" alt={item.name} />
      </div>
      <div className="flex flex-col gap-0.5">
        <p>
          <a href={item.href} target="_blank" rel="noopener">
            {item.name}
          </a>
          <span className="text-[#888] text-sm ml-2">{item.date}</span>
        </p>
        <p className="max-w-[17rem] text-sm">{item.explain}</p>
      </div>
    </div>
  );
};

export default WorkItem;
