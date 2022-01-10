import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Villa24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M13.5 8.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8 11.3H5v3h3v-3Zm5.5 0v3h-3v-3h3Zm5.5 0h-3v3h3v-3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.56 3.3h5.94L23 7.97V22.3H13v-3a1 1 0 1 0-2 0v3H1V7.97L4.5 3.3h5.94L12 2l1.56 1.3Zm2.4 2 2.4 2H20l-1.5-2h-2.54Zm5.04 15v-11h-3.36L12 4.6 6.36 9.3H3v11h6v-1a3 3 0 0 1 6 0v1h6ZM5.64 7.3H4l1.5-2h2.54l-2.4 2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Villa24.displayName = 'Icon.Villa';

export default Villa24;
