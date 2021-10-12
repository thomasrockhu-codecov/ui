import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LinkedAccounts16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M15.07 6.586l-3.535 3.535-1.414-1.414 3.536-3.535-2.829-2.829L7.293 5.88 5.878 4.464 9.414.93a2 2 0 012.828 0l2.829 2.828a2 2 0 010 2.829zM.929 12.243a2 2 0 010-2.829L4.464 5.88l1.414 1.414-3.535 3.535 2.828 2.829 3.536-3.536 1.414 1.415-3.536 3.535a2 2 0 01-2.828 0L.929 12.243z"
        fill="currentColor"
      />
      <path
        d="M6.586 10.828l4.242-4.242-1.414-1.414-4.242 4.242 1.414 1.414z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default LinkedAccounts16;
