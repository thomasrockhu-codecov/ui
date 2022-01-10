import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExclamationMark24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1v17h-2V1h2zM13 20v3h-2v-3h2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ExclamationMark24.displayName = 'Icon.ExclamationMark';

export default ExclamationMark24;
