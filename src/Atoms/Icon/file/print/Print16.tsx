import React from 'react';
import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Print16 = (props: IconProps) => (
  <IconBase {...props} width={16} height={16}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 1H12V5H16V14H12V16H4V14H0V5H4V1ZM4 12V9H12V12H14V7H2V12H4ZM10 3V5H6V3H10ZM6 14V11H10V14H6Z"
      fill="currentColor"
    />
  </IconBase>
);

Print16.displayName = 'Icon.Print';

export default Print16;
