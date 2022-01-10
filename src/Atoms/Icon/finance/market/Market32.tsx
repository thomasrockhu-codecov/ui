import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Market32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1C2.34315 1 1 2.34315 1 4V31H28C29.6569 31 31 29.6569 31 28V1H4ZM3 4C3 3.44772 3.44772 3 4 3H29V8.58588L19.9062 17.6796L11.9062 11.6796L3 20.5859V4ZM3 23.4143V29H28C28.5523 29 29 28.5523 29 28V11.4143L20.0939 20.3204L12.0939 14.3204L3 23.4143Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Market32.displayName = 'Icon.Market';

export default Market32;
