import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowUp16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M8.998 4.83l4 4V6.003l-5-5-5 5v2.829l4-4v10.166h2V4.832z" fill="currentColor" />
    </IconBase>
  );
};

ArrowUp16.displayName = 'Icon.ArrowUp';

export default ArrowUp16;
