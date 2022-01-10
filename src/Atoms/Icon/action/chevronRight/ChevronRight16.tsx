import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronRight16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M2.58 16l8-8-8-8h2.828l8 8-8 8H2.58z" fill="currentColor" />
    </IconBase>
  );
};

ChevronRight16.displayName = 'Icon.ChevronRight';

export default ChevronRight16;
