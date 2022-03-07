import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Popsicle16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="m8 5.6.3.3c.2.2.3.6.3 1.1h2a4 4 0 0 0-.6-2.3c-.4-.6-1.1-1.1-2-1.1v2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4 6.5C2.4 3.1 4.7 0 8 0s5.6 3 5.6 6.5c0 3-1.9 5.8-4.6 6.4V16H7v-3.1c-2.7-.6-4.6-3.3-4.6-6.4ZM8 2C6.2 2 4.4 3.8 4.4 6.5S6.2 11 8 11s3.6-1.8 3.6-4.5S9.8 2 8 2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Popsicle16.displayName = 'Icon.Popsicle';

export default Popsicle16;
