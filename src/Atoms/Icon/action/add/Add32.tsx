import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Add32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M15 17v14h2V17h14v-2H17V1h-2v14H1v2h14z" fill="currentColor" />
    </IconBase>
  );
};

export default Add32;
