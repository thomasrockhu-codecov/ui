import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Star12: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={12} height={12}>
      <path
        d="M6 2.23934L7.21979 4.26621L7.43824 4.6292L7.85096 4.72479L10.1556 5.25854L8.60483 7.04496L8.32712 7.36489L8.36374 7.78695L8.56828 10.1437L6.39009 9.2209L6 9.05564L5.60991 9.2209L3.43172 10.1437L3.63626 7.78695L3.67289 7.36489L3.39517 7.04496L1.84444 5.25854L4.14904 4.72479L4.56176 4.6292L4.78021 4.26621L6 2.23934Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
    </IconBase>
  );
};

export default Star12;
