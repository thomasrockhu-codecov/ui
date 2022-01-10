import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Percent24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99074 1H6.00926C8.21414 1.005 10 2.79394 10 4.99999C10 7.20913 8.20914 8.99999 6 8.99999C3.79086 8.99999 2 7.20913 2 4.99999C2 2.79394 3.78586 1.005 5.99074 1ZM6 2.99999C4.89543 2.99999 4 3.89542 4 4.99999C4 6.10456 4.89543 6.99999 6 6.99999C7.10457 6.99999 8 6.10456 8 4.99999C8 3.89542 7.10457 2.99999 6 2.99999Z"
        fill="currentColor"
      />
      <path d="M2.8344 23L18.364 1H20.8121L5.28248 23H2.8344Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 15C15.7909 15 14 16.7908 14 19C14 21.2091 15.7909 23 18 23C20.2091 23 22 21.2091 22 19C22 16.7908 20.2091 15 18 15ZM16 19C16 17.8954 16.8954 17 18 17C19.1046 17 20 17.8954 20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Percent24.displayName = 'Icon.Percent';

export default Percent24;
