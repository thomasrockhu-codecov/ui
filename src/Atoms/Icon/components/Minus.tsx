import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Minus = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.166 0v2h-12V0z" fillRule="evenodd" />
    </IconBase>
  );
};

Minus.displayName = 'Icon.Minus';
