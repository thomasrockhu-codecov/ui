import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ImportIcon16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M11 8.23019V5.61879L8.99999 7.46534L8.99998 0L6.99998 1.74846e-07L6.99999 7.46534L5 5.61882V8.23021L7.99999 11L11 8.23019Z"
        fill="currentColor"
      />
      <path
        d="M2 13V11H0V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V11H14V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ImportIcon16;
