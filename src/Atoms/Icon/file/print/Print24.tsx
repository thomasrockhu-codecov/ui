import React from 'react';
import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Print24 = (props: IconProps) => (
  <IconBase {...props} width={24} height={24}>
    <path d="M15 14H7v-2h8v2ZM7 17h8v-2H7v2Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0h14v5h4v11h-4v4H4v-4H0V5h4V0Zm0 14V9h14v5h2V7H2v7h2ZM16 2v3H6V2h10ZM6 18v-7h10v7H6Z"
      fill="currentColor"
    />
  </IconBase>
);

export default Print24;
