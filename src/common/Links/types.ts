import { ReactNode, FC, RefObject, HTMLProps } from 'react';

export type LinkProps = Partial<HTMLProps<HTMLAnchorElement>> & {
  to: any;
  external?: boolean;
  innerRef?:
    | ((instance: HTMLAnchorElement | null) => void)
    | RefObject<HTMLAnchorElement>
    | null
    | undefined;
};

export type LinkProviderProps = {
  link: FC<LinkProps>;
  children: ReactNode;
};
