import React, { createContext, FC } from 'react';
import { LinkProps } from './types';

export const DefaultLink: FC<LinkProps> = ({ to, children, ...rest }) => {
  return (
    <a {...rest} href={to}>
      {children}
    </a>
  );
};

export const LinkContext = createContext(DefaultLink);

export default LinkContext;
