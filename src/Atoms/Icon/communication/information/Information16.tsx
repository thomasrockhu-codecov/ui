import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Information16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M7 4h2v2H7V4zM7 7h2v5H7V7z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-2A6 6 0 108 2a6 6 0 000 12z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Information16.displayName = 'Icon.Information';

export default Information16;
