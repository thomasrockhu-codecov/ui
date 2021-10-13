import React from 'react';
import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Print16 = (props: IconProps) => (
  <IconBase {...props} width={16} height={16}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0h8v4h4v9h-4v2H4v-2H0V4h4V0Zm0 11V8h8v3h2V6H2v5h2Zm6-9v2H6V2h4ZM6 13v-3h4v3H6Z"
      fill="currentColor"
    />
  </IconBase>
);

export default Print16;
