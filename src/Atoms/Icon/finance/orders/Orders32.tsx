import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Orders32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M6 3a3 3 0 0 0-3 3v23h2V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v23h2V6a3 3 0 0 0-3-3H6Z"
        fill="currentColor"
      />
      <path d="M8 11h16V9H8v2Zm16 6H8v-2h16v2ZM8 23h8v-2H8v2Z" fill="currentColor" />
    </IconBase>
  );
};

Orders32.displayName = 'Icon.Orders';

export default Orders32;
