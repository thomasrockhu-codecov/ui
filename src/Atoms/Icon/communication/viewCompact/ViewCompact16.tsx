import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ViewCompact16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3h16v2H0V3ZM0 7h16v2H0V7ZM16 11H0v2h16v-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ViewCompact16.displayName = 'Icon.ViewCompact';

export default ViewCompact16;
