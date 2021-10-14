import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Growth24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M18 5V7.82843L20 5.82843V23H22V5.82843L24 7.82843V5L21 2L18 5Z M16 9H14V23H16V9Z M8 13H10V23H8V13Z M2 17H4V23H2V17Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Growth24;
