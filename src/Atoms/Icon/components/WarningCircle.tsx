import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const WarningCircle = (props: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z" />
    <g fill="#FFF">
      <path d="M25.122 22L16.015 5.274 6.876 22h18.246zm-9.11-13.941l6.865 12.608H9.123l6.889-12.608z" />
      <path d="M15.333 17.333h1.333v1.333h-1.333z" />
      <path d="M16.733 11.439v4.667H15.4v-4.667z" />
    </g>
  </IconBase>
);

WarningCircle.displayName = 'Icon.WarningCircle';
