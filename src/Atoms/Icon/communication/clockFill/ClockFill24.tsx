import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ClockFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM13 11V5H11V13H19V11H13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ClockFill24;
