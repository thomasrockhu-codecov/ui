import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const PlusThin = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 35 35">
      <path d="M16.7618.1432h3v35.8736h-3z" fillRule="evenodd" />
      <path d="M35.2986 16.08v3H.425v-3z" fillRule="evenodd" />
    </IconBase>
  );
};

PlusThin.displayName = 'Icon.PlusThin';
