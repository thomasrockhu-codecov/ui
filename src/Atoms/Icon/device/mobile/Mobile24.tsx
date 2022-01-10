import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Mobile24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1v22h14V1H5zm5 2H7v13h10V3h-3v1h-4V3zM7 21v-3h10v3H7z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Mobile24.displayName = 'Icon.Mobile';

export default Mobile24;
