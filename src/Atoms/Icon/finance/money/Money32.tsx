import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Money32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12ZM14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 7H1V25H31V7ZM3 10.8293V9H4.82929C4.52801 9.85241 3.85241 10.528 3 10.8293ZM3 12.9V19.1C4.95913 19.4977 6.5023 21.0409 6.89998 23H25.1C25.4977 21.0409 27.0409 19.4977 29 19.1V12.9C27.0409 12.5023 25.4977 10.9591 25.1 9H6.89998C6.5023 10.9591 4.95913 12.5023 3 12.9ZM27.1707 23C27.472 22.1476 28.1476 21.472 29 21.1707V23H27.1707ZM3 21.1707V23H4.82929C4.52801 22.1476 3.85241 21.472 3 21.1707ZM29 10.8293C28.1476 10.528 27.472 9.85241 27.1707 9H29V10.8293Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Money32;
