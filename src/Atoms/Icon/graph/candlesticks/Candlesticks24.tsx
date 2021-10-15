import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Candlesticks24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L8 5H10V15H8L8 23H6L6 15H4V5H6L6 1H8ZM6 13V7H8V13H6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 9H18V1H16V9H14V19H16V23H18V19H20V9ZM18 17H16V11H18V17Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Candlesticks24;
