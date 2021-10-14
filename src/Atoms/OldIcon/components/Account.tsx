import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Account = (props: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <g fillRule="evenodd">
      <path d="M25 20h2v-2h-2v2z" />
      <path d="M1 5a4 4 0 014-4h22v6h4v24H5a4 4 0 01-4-4V5zm4-2h20v4H5a2 2 0 110-4zm0 6h24v20H5a2 2 0 01-2-2V8.465C3.588 8.805 4.271 9 5 9z" />
    </g>
  </IconBase>
);

Account.displayName = 'OldIcon.Account';
