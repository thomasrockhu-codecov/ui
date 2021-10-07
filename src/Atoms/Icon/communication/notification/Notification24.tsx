import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Notification24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M19 9a4 4 0 100-8 4 4 0 000 8z" fill="currentColor" />
      <path
        d="M21 18v-7.341A5.99 5.99 0 0119 11v7a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h7c0-.701.12-1.374.341-2H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Notification24;
