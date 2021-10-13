import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FactSheet16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M7 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.41 0H0v16h14V3.59L10.41 0ZM2 9.13V2h7.59L12 4.41v4.5l-2.75-2.2-3.8 3.05-2.2-1.46L2 9.13Zm0 2.4V14h10v-2.52l-2.75-2.2-3.7 2.96-2.3-1.54-1.25.84Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default FactSheet16;
