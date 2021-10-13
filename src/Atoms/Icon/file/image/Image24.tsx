import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FactSheet24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.41 0H0v22h18V4.59L13.41 0ZM2 14.13V2h10.59L16 5.41v8.5l-4-3.2-5.05 4.05L4 12.8l-2 1.33Zm0 2.4V20h14v-3.52l-4-3.2-4.95 3.96L4 15.2l-2 1.34Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default FactSheet24;
