import React from 'react';
import { HeaderTextComponent } from './HeaderText.types';
import { Text } from '..';

export const HeaderText: HeaderTextComponent = ({ className, sorted, children }) => (
  <Text
    className={className}
    color={(t) => (sorted ? t.color.text : t.color.label)}
    weight={sorted ? 'bold' : 'regular'}
  >
    {children}
  </Text>
);
