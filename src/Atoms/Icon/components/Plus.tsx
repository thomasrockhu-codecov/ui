import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Plus = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.166 0v5h5v2h-5v5h-2V6.999L.166 7V5l5-.001V0h2z" fillRule="evenodd" />
    </IconBase>
  );
};

Plus.displayName = 'Icon.Plus';
