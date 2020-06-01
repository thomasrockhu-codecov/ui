import React from 'react';
import { Props } from './RowGroup.types';

export const RowGroup: React.FC<Props> = ({ children }) => {
  return <div role="rowgroup">{children}</div>;
};
