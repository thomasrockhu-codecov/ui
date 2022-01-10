import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Withdraw24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3h4V1H4a3 3 0 00-3 3v16a3 3 0 003 3h4v-2H4a1 1 0 01-1-1v-1h20V5H3V4a1 1 0 011-1zm17 4v10H3V7h18z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Withdraw24.displayName = 'Icon.Withdraw';

export default Withdraw24;
