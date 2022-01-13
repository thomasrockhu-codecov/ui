import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const DislikeFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M6 11L5 10V5L7 3H11.3401C12.3026 3 13.1285 3.68548 13.3059 4.63142L14.0559 8.63142C14.2867 9.86225 13.3424 11 12.0901 11H9V12C9 13.6569 7.65685 15 6 15V11Z"
        fill="currentColor"
      />
      <path
        d="M1 9C1 9.55228 1.44772 10 2 10H4V4C4 3.44772 3.55228 3 3 3H1V9Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

DislikeFill16.displayName = 'Icon.DislikeFill';

export default DislikeFill16;
