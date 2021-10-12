import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronRight24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M6.05 22l9.5-9.973L6 2h2.45L18 12.027 8.5 22H6.05z" fill="currentColor" />
    </IconBase>
  );
};

export default ChevronRight24;
