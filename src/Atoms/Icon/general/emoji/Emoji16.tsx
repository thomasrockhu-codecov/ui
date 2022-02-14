import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Emoji16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8 10.5A1.5 1.5 0 0 1 6.5 9h-2a3.5 3.5 0 1 0 7 0h-2A1.5 1.5 0 0 1 8 10.5ZM6.5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-2 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Emoji16.displayName = 'Icon.Emoji';

export default Emoji16;
