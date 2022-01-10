import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Controls24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17071 4C3.58254 2.83481 4.69378 2 6 2C7.30622 2 8.41746 2.83481 8.82929 4H23V6H8.82929C8.41746 7.16519 7.30622 8 6 8C4.69378 8 3.58254 7.16519 3.17071 6H1V4H3.17071ZM6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4ZM15.1707 11C15.5825 9.83481 16.6938 9 18 9C19.3062 9 20.4175 9.83481 20.8293 11H23V13H20.8293C20.4175 14.1652 19.3062 15 18 15C16.6938 15 15.5825 14.1652 15.1707 13H1V11H15.1707ZM18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11ZM9.17071 18C9.58254 16.8348 10.6938 16 12 16C13.3062 16 14.4175 16.8348 14.8293 18H23V20H14.8293C14.4175 21.1652 13.3062 22 12 22C10.6938 22 9.58254 21.1652 9.17071 20H1V18H9.17071ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Controls24.displayName = 'Icon.Controls';

export default Controls24;
