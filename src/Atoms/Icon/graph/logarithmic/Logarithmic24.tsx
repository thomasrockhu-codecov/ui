import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Logarithmic24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 22C1 10.402 10.402 1 22 1H23V3H22C11.5066 3 3 11.5066 3 22V23H1V22Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Logarithmic24;
