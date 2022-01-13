import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M1 9.918V7.09l15 15 15-15v2.828l-15 15-15-15z" fill="currentColor" />
    </IconBase>
  );
};

ChevronDown32.displayName = 'Icon.ChevronDown';

export default ChevronDown32;
