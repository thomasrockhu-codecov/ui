import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Apartment24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M17 1H1v22h2V3h12v20h2V11h4v12h2V9h-6V1Z" fill="currentColor" />
      <path
        d="M8 21c0-.5523.44772-1 1-1s1 .4477 1 1v2h2v-2c0-1.6569-1.3431-3-3-3-1.65685 0-3 1.3431-3 3v2h2v-2Zm12-7h-2v-2h2v2Zm0 4h-2v-2h2v2Zm0 4h-2v-2h2v2ZM6 5H4v2h2V5ZM4 9h2v2H4V9Zm2 4H4v2h2v-2Zm2-8h2v2H8V5Zm2 4H8v2h2V9Zm-2 4h2v2H8v-2Zm6-8h-2v2h2V5Zm-2 4h2v2h-2V9Zm2 4h-2v2h2v-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Apartment24.displayName = 'Icon.Apartment';

export default Apartment24;
