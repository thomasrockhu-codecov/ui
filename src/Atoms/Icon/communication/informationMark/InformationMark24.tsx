import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InformationMark24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 22V6h2v16h-2zM11 4V2h2v2h-2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

InformationMark24.displayName = 'Icon.InformationMark';

export default InformationMark24;
