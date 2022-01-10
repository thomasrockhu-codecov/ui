import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Fund32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M24 2H2V20L4 18V4H22V30H24V11H28V30H30V9H24V2Z" fill="currentColor" />
      <path
        d="M9 12H13.5858L2 23.5858V30H4V24.4142L15 13.4142V18L17 16V10H11L9 12Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Fund32.displayName = 'Icon.Fund';

export default Fund32;
