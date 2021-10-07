import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InformationFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM7 4h2v2H7V4zm0 3h2v5H7V7z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default InformationFill16;
