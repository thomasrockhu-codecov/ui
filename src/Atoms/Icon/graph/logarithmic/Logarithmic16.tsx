import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Logarithmic16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.16344 7.16344 0 16 0V2C8.26801 2 2 8.26801 2 16H0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Logarithmic16.displayName = 'Icon.Logarithmic';

export default Logarithmic16;
