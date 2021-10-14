import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PriceMarker16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M13.3339 9L11.0009 9V7L12.2636 7L13.5969 5L12.2636 3H8.00031V6H6.00031V1L13.3339 1L16.0006 5L13.3339 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0006 7L2.66667 7L0 11L2.66667 15L10.0006 15V7ZM2.4037 11L3.73703 9L8.00056 9V13L3.73703 13L2.4037 11Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default PriceMarker16;
