import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps, ColorFn } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Account = ({ fill, ...props }: BaseProps & { fill: ColorFn | string }) => (
  <IconBase {...props} viewBox="0 0 32 32" fill={(t) => t.color.spinnerWhite}>
    <StyledPath
      cssAttribute="stroke"
      strokeColorFn={fill}
      strokeWidth="2"
      d="M22.857 9H28v19H7.667A3.667 3.667 0 014 24.333V6.5M25 18h-3M6.5 4H23v5H6.5a2.5 2.5 0 010-5z"
    />
  </IconBase>
);

Account.displayName = 'Icon.Account';
