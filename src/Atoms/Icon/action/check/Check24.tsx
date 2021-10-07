import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.778 17.435l-6.364-6.364L1 12.485l7.778 7.779 14.85-14.85L22.212 4 8.778 17.435z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Check24;
