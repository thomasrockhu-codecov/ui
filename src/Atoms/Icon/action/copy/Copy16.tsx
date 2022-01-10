import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Copy16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M0 2C0 0.895431 0.89543 0 2 0H10C11.1046 0 12 0.89543 12 2V3H10V2L2 2V10H3V12H2C0.895431 12 0 11.1046 0 10V2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V6C16 4.89543 15.1046 4 14 4H6ZM6 14V6H14V14H6Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Copy16.displayName = 'Icon.Copy';

export default Copy16;
