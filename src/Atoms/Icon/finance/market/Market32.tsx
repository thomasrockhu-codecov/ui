import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Market32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1a3 3 0 00-3 3v27h27a3 3 0 003-3V1H4zM3 4a1 1 0 011-1h25v5.586l-9.094 9.094-8-6L3 20.586V4zm0 19.414V29h25a1 1 0 001-1V11.414l-8.906 8.906-8-6L3 23.414z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Market32;
