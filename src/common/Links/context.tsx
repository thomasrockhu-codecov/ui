import React, { createContext, FC } from 'react';
import { LinkProps } from './types';

export const DefaultLink: FC<LinkProps> = ({ to, children, innerRef, ...rest }) => {
  return (
    <a ref={innerRef} {...rest} href={to}>
      {children}
    </a>
  );
};

export const LinkContext = createContext(DefaultLink);

export default LinkContext;
