import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cross32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M3.274 1.86L1.86 3.274l12.728 12.728L1.86 28.73l1.414 1.414 12.728-12.728L28.73 30.144l1.414-1.414-12.728-12.728L30.144 3.274 28.73 1.86 16.002 14.588 3.274 1.86z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Cross32.displayName = 'Icon.Cross';

export default Cross32;
