import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowUp32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M5 14.828l10-10V31h2V4.824l10 10v-2.828L16.004 1H16L5 12v2.828z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ArrowUp32.displayName = 'Icon.ArrowUp';

export default ArrowUp32;
