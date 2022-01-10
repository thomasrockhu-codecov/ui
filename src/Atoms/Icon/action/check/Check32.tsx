import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.057 24.132l-9.193-9.193L.45 16.355 11.057 26.96 31.563 6.454 30.148 5.04 11.057 24.132z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Check32.displayName = 'Icon.Check';

export default Check32;
