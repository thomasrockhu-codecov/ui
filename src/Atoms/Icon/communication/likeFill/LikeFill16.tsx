import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LikeFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M6 5L5 6V11L7 13H11.3401C12.3026 13 13.1285 12.3145 13.3059 11.3686L14.0559 7.36858C14.2867 6.13775 13.3424 5 12.0901 5H9V4C9 2.34315 7.65685 1 6 1V5Z"
        fill="currentColor"
      />
      <path
        d="M1 7C1 6.44772 1.44772 6 2 6H4V12C4 12.5523 3.55228 13 3 13H1V7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

LikeFill16.displayName = 'Icon.LikeFill';

export default LikeFill16;
