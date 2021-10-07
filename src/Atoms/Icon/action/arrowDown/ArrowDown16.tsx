import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowDown16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M6.998 11.17l-4-4v2.828l5 5 5-5V7.168l-4 4V1.002h-2V11.17z" fill="currentColor" />
    </IconBase>
  );
};

export default ArrowDown16;
