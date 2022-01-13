import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InformationMark32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30V8h2v22h-2zM15 5V2h2v3h-2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

InformationMark32.displayName = 'Icon.InformationMark';

export default InformationMark32;
