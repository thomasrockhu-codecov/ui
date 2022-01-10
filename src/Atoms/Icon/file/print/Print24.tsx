import React from 'react';
import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Print24 = (props: IconProps) => (
  <IconBase {...props} width={24} height={24}>
    <path d="M16 16H8V14H16V16Z" fill="currentColor" />
    <path d="M8 19H16V17H8V19Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2H19V7H23V18H19V22H5V18H1V7H5V2ZM5 16V11H19V16H21V9H3V16H5ZM17 4V7H7V4H17ZM7 20V13H17V20H7Z"
      fill="currentColor"
    />
  </IconBase>
);

Print24.displayName = 'Icon.Print';

export default Print24;
