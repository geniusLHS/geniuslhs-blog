import useRenderNotifyAnchor from "../hooks/useRerenderDetect";

export default function Div({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRenderNotifyAnchor();

  return <div ref={ref} {...props} />;
}
