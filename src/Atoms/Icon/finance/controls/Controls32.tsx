import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Controls32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7H5.12602C5.57006 8.72523 7.13616 10 9 10C10.8638 10 12.4299 8.72523 12.874 7H30V5H12.874C12.4299 3.27477 10.8638 2 9 2C7.13616 2 5.57006 3.27477 5.12602 5H2V7ZM9 4C7.89543 4 7 4.89543 7 6C7 7.10457 7.89543 8 9 8C10.1046 8 11 7.10457 11 6C11 4.89543 10.1046 4 9 4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.874 27C19.4299 28.7252 17.8638 30 16 30C14.1362 30 12.5701 28.7252 12.126 27H2V25H12.126C12.5701 23.2748 14.1362 22 16 22C17.8638 22 19.4299 23.2748 19.874 25L30 25V27L19.874 27ZM16 28C17.1046 28 18 27.1046 18 26C18 24.8954 17.1046 24 16 24C14.8954 24 14 24.8954 14 26C14 27.1046 14.8954 28 16 28Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 20C24.8638 20 26.4299 18.7252 26.874 17H30V15H26.874C26.4299 13.2748 24.8638 12 23 12C21.1362 12 19.5701 13.2748 19.126 15L2 15V17L19.126 17C19.5701 18.7252 21.1362 20 23 20ZM25 16C25 17.1046 24.1046 18 23 18C21.8954 18 21 17.1046 21 16C21 14.8954 21.8954 14 23 14C24.1046 14 25 14.8954 25 16Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Controls32;
