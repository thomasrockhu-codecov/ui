import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Trash24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.535 1h-5.07l-2 3H4v2h16V4h-3.465l-2-3zm-.403 3l-.667-1h-2.93L9.87 4h4.263z"
        fill="currentColor"
      />
      <path
        d="M4 20V7h2v13a1 1 0 001 1h10a1 1 0 001-1V7h2v13a3 3 0 01-3 3H7a3 3 0 01-3-3z"
        fill="currentColor"
      />
      <path d="M9 9v9h2V9H9zM13 18V9h2v9h-2z" fill="currentColor" />
    </IconBase>
  );
};

Trash24.displayName = 'Icon.Trash';

export default Trash24;
