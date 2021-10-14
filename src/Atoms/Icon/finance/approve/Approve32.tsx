import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Approve32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <g fill="currentColor">
        <path d="M6 3C4.34315 3 3 4.34315 3 6V29H5V6C5 5.44772 5.44772 5 6 5H26C26.5523 5 27 5.44772 27 6V29H29V6C29 4.34315 27.6569 3 26 3H6Z" />
        <path d="M8 11H24V9H8V11Z" />
        <path d="M24 17H8V15H24V17Z" />
        <path d="M8 23H16V21H8V23Z" />
      </g>
    </IconBase>
  );
};

export default Approve32;
