import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M22.086 1.004h2.828l-15 15 15 15h-2.828l-15-15 15-15z" fill="currentColor" />
    </IconBase>
  );
};

ChevronLeft32.displayName = 'Icon.ChevronLeft';

export default ChevronLeft32;
