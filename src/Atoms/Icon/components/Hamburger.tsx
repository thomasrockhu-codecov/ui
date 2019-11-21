import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Hamburger = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 0h26v2H0V0zm0 16h26v2H0v-2zm0-8h26v2H0V8z" fillRule="evenodd" />
    </IconBase>
  );
};

Hamburger.displayName = 'Icon.Hamburger';
