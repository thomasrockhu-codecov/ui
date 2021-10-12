import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const WindowCollapse16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <g fill="currentColor">
        <path d="M0 7L7 7L7 0H5L5 5L0 5V7Z" />
        <path d="M16 9L9 9L9 16H11L11 11L16 11V9Z" />
        <path d="M9 7V0H11V5L16 5V7L9 7Z" />
        <path d="M7 16L7 9H0V11H5L5 16H7Z" />
      </g>
    </IconBase>
  );
};

export default WindowCollapse16;
