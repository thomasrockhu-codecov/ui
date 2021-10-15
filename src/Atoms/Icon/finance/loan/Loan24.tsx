import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Loan24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M8 17C8 15.8954 8.89543 15 10 15C11.1046 15 12 15.8954 12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 1H6V11H1V23H19V11H8V3H21V23H23V1ZM3 21V13H17V21H3Z"
        fill="currentColor"
      />
      <path d="M15 7H19V5H15V7Z" fill="currentColor" />
    </IconBase>
  );
};

export default Loan24;
