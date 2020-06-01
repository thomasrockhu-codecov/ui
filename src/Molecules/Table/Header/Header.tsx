import React from 'react';
import { Props } from './Header.types';

export const Header: React.FC<Props> = ({ className, id, colSpan, children, ...htmlProps }) => {
  return (
    <div
      id={id}
      className={className}
      // @ts-ignore
      colSpan={colSpan}
      role="columnheader"
      {...htmlProps}
    >
      {children}
    </div>
  );
};
