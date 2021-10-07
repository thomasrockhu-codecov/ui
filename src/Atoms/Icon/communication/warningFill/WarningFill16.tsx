import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const WarningFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.3 1.5a1.5 1.5 0 00-2.6 0L.204 12.754a1.5 1.5 0 001.3 2.25h12.994a1.5 1.5 0 001.3-2.25L9.299 1.5zM7 10h2V5H7v5zm0 3h2v-2H7v2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default WarningFill16;
