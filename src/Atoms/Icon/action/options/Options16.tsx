import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Options16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z"
        fill="currentColor"
      />
      <path
        d="M8 12C9.10457 12 10 12.8954 10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12Z"
        fill="currentColor"
      />
      <path
        d="M8 0C9.10457 -4.82823e-08 10 0.89543 10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 4.82823e-08 8 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Options16;
