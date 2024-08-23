interface ImageProps extends React.HTMLProps<HTMLElement> {
  className?: string;
}

export const Image = ({ ...props }: ImageProps) => {
  const src = props.src;
  const alt = props.alt;

  return (
    <>
      <img src={src} alt={alt} className="mb-0 mt-8 rounded-md" />
      {alt !== "" && <span className="mb-6 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">{alt}</span>}
    </>
  );
};
