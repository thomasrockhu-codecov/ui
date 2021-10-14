import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Attention16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <g fill="currentColor">
        <path d="M9 9V4H7V9H9Z" />
        <path d="M9 12V10H7V12H9Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
        />
      </g>
    </IconBase>
  );
};

export default Attention16;
