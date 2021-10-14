import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const BarGraph24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M21 1v18h-2V1h2Zm-4 18V9h-2v10h2ZM5 19v-8H3v8h2Zm17 2H2v2h20v-2ZM9 15v4H7v-4h2Zm4 4V5h-2v14h2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default BarGraph24;
