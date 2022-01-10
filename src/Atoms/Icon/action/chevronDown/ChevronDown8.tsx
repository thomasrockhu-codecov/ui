import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M0 .59l4 4 4-4v2.828l-4 4-4-4V.59z" fill="currentColor" />
    </IconBase>
  );
};

ChevronDown8.displayName = 'Icon.ChevronDown';

export default ChevronDown8;
