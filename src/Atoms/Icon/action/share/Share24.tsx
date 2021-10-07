import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Export24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M11 4.828l-3 3V5l4-4 4 4v2.828l-3-3v8.829h-2V4.828z" fill="currentColor" />
      <path
        d="M20 20v-9h2v9a3 3 0 01-3 3H5a3 3 0 01-3-3v-9h2v9a1 1 0 001 1h14a1 1 0 001-1z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Export24;
