import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Tag32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 5H6.6L0 16l6.6 11H32V5ZM2.3 16l5.4-9H30v18H7.7l-5.4-9Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Tag32.displayName = 'Icon.Tax';

export default Tag32;
