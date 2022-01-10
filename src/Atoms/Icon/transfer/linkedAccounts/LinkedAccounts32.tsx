import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LinkedAccounts32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={33} height={32}>
      <path
        d="M28.492 8.222a3 3 0 010 4.242l-6.128 6.129-1.414-1.415 6.128-6.128a1 1 0 000-1.414l-4.714-4.714a1 1 0 00-1.414 0l-6.128 6.128-1.414-1.414 6.128-6.128a3 3 0 014.242 0l4.715 4.714zM3.508 23.778a3 3 0 010-4.242l6.128-6.129 1.414 1.415-6.128 6.128a1 1 0 000 1.414l4.714 4.714a1 1 0 001.414 0l6.128-6.128 1.415 1.414-6.129 6.128a3 3 0 01-4.242 0l-4.714-4.714z"
        fill="currentColor"
      />
      <path
        d="M13.172 20.714l7.542-7.542-1.414-1.415-7.543 7.543 1.415 1.414z"
        fill="currentColor"
      />
    </IconBase>
  );
};

LinkedAccounts32.displayName = 'Icon.LinkedAccounts';

export default LinkedAccounts32;
