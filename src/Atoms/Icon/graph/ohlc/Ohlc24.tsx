import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Ohlc24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M19 1H17V4H14V6H17V19H19V16H22V14H19V1Z" fill="currentColor" />
      <path d="M7 5H5V18H2V20H5V23H7V10H10V8H7V5Z" fill="currentColor" />
    </IconBase>
  );
};

Ohlc24.displayName = 'Icon.Ohlc';

export default Ohlc24;
