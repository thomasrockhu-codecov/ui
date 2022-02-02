import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Tag16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2H3.6L0 8l3.6 6H16V2ZM2.3 8l2.4-4H14v8H4.7L2.3 8Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Tag16.displayName = 'Icon.Tag';

export default Tag16;
