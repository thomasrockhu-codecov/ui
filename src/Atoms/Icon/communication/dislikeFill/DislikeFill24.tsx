import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const DislikeFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M3 15C2.44772 15 2 14.5523 2 14V5H5C5.55228 5 6 5.44772 6 6V15H3Z"
        fill="currentColor"
      />
      <path
        d="M9 17L7 15V7L9 5H16.6577C18.0343 5 19.2342 5.93689 19.5681 7.27239L21.0681 13.2724C21.5415 15.1658 20.1094 17 18.1577 17H13V20C13 21.6569 11.6569 23 10 23H9V17Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default DislikeFill24;
