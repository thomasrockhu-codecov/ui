import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Comment16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V12H5.33333L0 16V0ZM2 2V12L4.66667 10H14V2H2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Comment16.displayName = 'Icon.Comment';

export default Comment16;
