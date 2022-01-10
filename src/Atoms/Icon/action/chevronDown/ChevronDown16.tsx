import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M0 2.58l8 8 8-8v2.828l-8 8-8-8V2.58z" fill="currentColor" />
    </IconBase>
  );
};

ChevronDown16.displayName = 'Icon.ChevronDown';

export default ChevronDown16;
