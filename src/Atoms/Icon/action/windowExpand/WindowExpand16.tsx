import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const WindowExpand16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <g fill="currentColor">
        <path d="M7 0H0V7L2 7L2 2L7 2L7 0Z" />
        <path d="M9 16L16 16V9H14L14 14L9 14V16Z" />
        <path d="M16 0V7H14V2H9V0H16Z" />
        <path d="M0 9V16H7V14H2V9H0Z" />
      </g>
    </IconBase>
  );
};

export default WindowExpand16;
