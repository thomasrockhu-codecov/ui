import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Fee16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H7.41421L15.9498 8.53554L8.53554 15.9498L0 7.41421V0ZM2 2V6.58579L8.53554 13.1213L13.1213 8.53554L6.58579 2H2Z"
        fill="currentColor"
      />
      <circle cx="4" cy="4" r="1" fill="currentColor" />
    </IconBase>
  );
};

Fee16.displayName = 'Icon.Fee';

export default Fee16;
