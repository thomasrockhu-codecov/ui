import React from 'react';
import { IconBase } from '../IconBase';
import { ChildProps } from '../IconBase.types';

export const WarningTriangle = ({ ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 92 90">
      <path d="M46 0l46 89.3913043H0z" />
      <path d="M50 63.8333333v8h-8v-8h8zm0-28v24h-8v-24h8z" fill="#FFF" />
    </IconBase>
  );
};

WarningTriangle.displayName = 'Icon.WarningTriangle';
