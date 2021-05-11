import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps, ColorFn } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Account = ({ fill, ...props }: BaseProps & { fill: ColorFn | string }) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <StyledPath d="M25 20h2v-2h-2v2z" strokeColorFn={fill} strokeWidth={0} />
    <StyledPath
      fillRule="evenodd"
      clipRule="evenodd"
      strokeColorFn={fill}
      strokeWidth={0}
      d="M1 5a4 4 0 014-4h22v6h4v24H5a4 4 0 01-4-4V5zm4-2h20v4H5a2 2 0 110-4zm0 6h24v20H5a2 2 0 01-2-2V8.465C3.588 8.805 4.271 9 5 9z"
    />
  </IconBase>
);

Account.displayName = 'Icon.Account';
