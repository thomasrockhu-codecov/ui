import React from 'react';
import { Props } from './RowGroup.types';
import { Flexbox } from '../../../index';

export const RowGroup: React.FC<Props> = ({ children }) => {
  return <Flexbox role="rowgroup">{children}</Flexbox>;
};
