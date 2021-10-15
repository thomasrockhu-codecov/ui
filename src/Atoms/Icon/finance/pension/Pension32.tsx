import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Pension32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M8 18a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4v-2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 13.4A7 7 0 0 0 1.07 15H0v2h1.07A7 7 0 0 0 15 16a1 1 0 1 1 2 0 7 7 0 0 0 13.93 1H32v-2h-1.07a7 7 0 0 0-13.43-1.6 2.99 2.99 0 0 0-3 0ZM3 16a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm16 0a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Pension32;
