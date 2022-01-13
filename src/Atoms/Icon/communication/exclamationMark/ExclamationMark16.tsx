import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExclamationMark16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0v11H7V0h2zM9 13v3H7v-3h2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ExclamationMark16.displayName = 'Icon.ExclamationMark';

export default ExclamationMark16;
