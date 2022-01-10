import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Candlesticks16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0L5 2L7 2V10H5L5 16H3L3 10H1V2H3L3 0H5ZM3 8V4H5V8H3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6H13V0H11V6H9V14H11V16H13V14H15V6ZM13 12H11V8H13V12Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Candlesticks16.displayName = 'Icon.Candlesticks';

export default Candlesticks16;
