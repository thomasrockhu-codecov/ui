import { ReactNode, FC, Ref, HTMLProps } from 'react';

export type LinkProps = Partial<HTMLProps<HTMLAnchorElement>> & {
  to: any;
  external?: boolean;
  /** @deprecated use fullServerRedirect instead */
  cms?: boolean;
  fullServerRedirect?: boolean;
  innerRef?: Ref<any>;
};

export type LinkProviderProps = {
  link: FC<LinkProps>;
  children: ReactNode;
};
