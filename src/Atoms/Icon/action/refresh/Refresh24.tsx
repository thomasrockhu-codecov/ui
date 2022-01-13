import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Refresh24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M13.243 3l-3-3h2.828l4 4-4 4h-2.828l3-3H12a7 7 0 107 7h2a9 9 0 11-9-9h1.243z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Refresh24.displayName = 'Icon.Refresh';

export default Refresh24;
