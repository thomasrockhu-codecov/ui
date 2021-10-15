import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Fund24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M1 2H18V6H23V22H21V8H18V22H16V4H3V13L1 15V2Z" fill="currentColor" />
      <path
        d="M8.58636 10H6L8 8H12V12L10 14V11.4148L3.00019 18.4142L3.00026 22L1.00027 22L1.00017 17.5858L8.58636 10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Fund24;
