import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M2 6.051l9.973 9.5L22 6v2.45L11.973 18 2 8.5V6.051z" fill="currentColor" />
    </IconBase>
  );
};

ChevronDown24.displayName = 'Icon.ChevronDown';

export default ChevronDown24;
