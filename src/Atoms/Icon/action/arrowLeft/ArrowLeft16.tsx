import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowLeft16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M4.828 7l4-4H6L1 8l5 5h2.828l-4-4h10.167V7H4.828z" fill="currentColor" />
    </IconBase>
  );
};

ArrowLeft16.displayName = 'Icon.ArrowLeft';

export default ArrowLeft16;
