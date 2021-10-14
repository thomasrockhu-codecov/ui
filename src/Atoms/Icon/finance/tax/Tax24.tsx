import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Tax24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M7 18v2h6v-2H7Zm10-2H7v-2h10v2ZM14.08 4l-6.94 8H9.8l6.93-8h-2.64ZM17 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 24V0h18v24H3ZM5 2h14v20H5V2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Tax24;
