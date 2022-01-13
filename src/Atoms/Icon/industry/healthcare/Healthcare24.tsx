import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Healthcare24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M6.461 4a3.747 3.747 0 00-3.747 3.747c0 1.009.392 1.552 1.336 2.86l.086.119c.566.785 3.158 3.692 7.864 8.799 4.706-5.107 7.297-8.014 7.864-8.8l.085-.118c.945-1.308 1.336-1.851 1.336-2.86a3.747 3.747 0 00-7.494 0h-2a5.747 5.747 0 1111.494 0c0 1.673-.764 2.724-1.606 3.882l-.193.267c-.686.951-3.638 4.242-8.752 9.782l-.734.796-.735-.796c-5.114-5.54-8.065-8.831-8.752-9.782l-.193-.267C1.478 10.471.714 9.42.714 7.747a5.747 5.747 0 019.655-4.214l-1.36 1.466A3.73 3.73 0 006.46 4z"
        fill="currentColor"
      />
      <path d="M11 13H9.429v-2H11V9.429h2V11h1.572v2H13v1.571h-2V13z" fill="currentColor" />
    </IconBase>
  );
};

Healthcare24.displayName = 'Icon.Healthcare';

export default Healthcare24;
