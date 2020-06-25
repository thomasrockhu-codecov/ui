import { ReactNode } from 'react';

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  children: ReactNode;
} & React.HTMLProps<HTMLElement>;
