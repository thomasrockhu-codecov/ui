import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExclamationMark32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2v20h-2V2h2zM17 26v4h-2v-4h2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ExclamationMark32.displayName = 'Icon.ExclamationMark';

export default ExclamationMark32;
