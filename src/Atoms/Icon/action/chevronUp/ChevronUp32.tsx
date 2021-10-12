import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronUp32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M31 22.102v2.828l-15-15-15 15v-2.828l15-15 15 15z" fill="currentColor" />
    </IconBase>
  );
};

export default ChevronUp32;
