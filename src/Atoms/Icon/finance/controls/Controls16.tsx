import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Controls16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5H2.17071C2.58254 6.16519 3.69378 7 5 7C6.30622 7 7.41746 6.16519 7.82929 5H16V3H7.82929C7.41746 1.83481 6.30622 1 5 1C3.69378 1 2.58254 1.83481 2.17071 3H0V5ZM5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5C5.55228 5 6 4.55228 6 4C6 3.44772 5.55228 3 5 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8293 13C13.4175 14.1652 12.3062 15 11 15C9.69378 15 8.58254 14.1652 8.17071 13L0 13V11L8.17071 11C8.58254 9.83481 9.69378 9 11 9C12.3062 9 13.4175 9.83481 13.8293 11H16V13H13.8293ZM12 12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11C11.5523 11 12 11.4477 12 12Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Controls16;
