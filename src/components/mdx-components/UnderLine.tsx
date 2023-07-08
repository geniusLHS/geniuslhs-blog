import { ReactNode } from 'react';

interface UnderLineProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export default function UnderLine({ children }: UnderLineProps) {
  return <u className="decoration-dotted">{children}</u>;
}
