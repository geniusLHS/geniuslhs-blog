'use client';

interface SubHeaderProps {
  title: string;
  description: string;
}

export default function SubHeader({ title, description }: SubHeaderProps) {
  return (
    <section className="pt-14 pb-14 border-b border-b-[#898ea4]">
      <div className="text-3xl font-bold pb-5">{title}</div>
      <div className="text-lg">{description}</div>
    </section>
  );
}
