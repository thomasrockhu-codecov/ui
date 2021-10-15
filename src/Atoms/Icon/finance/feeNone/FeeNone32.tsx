import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FeeNone32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M2.29281 3.70712L28.2928 29.7071L29.7071 28.2929L3.70702 2.29291L2.29281 3.70712Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.99999H4.17133L6.17133 8.99999H5.89998C5.5023 10.9591 3.95913 12.5023 2 12.9V19.1C3.95913 19.4977 5.5023 21.0409 5.89998 23H20.1713L22.1713 25H0V6.99999ZM3.82929 8.99999H2V10.8293C2.85241 10.528 3.52801 9.8524 3.82929 8.99999ZM2 21.1707V23H3.82929C3.52801 22.1476 2.85241 21.472 2 21.1707Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82819 6.99999L11.8282 8.99999H26.1C26.4977 10.9591 28.0409 12.5023 30 12.9V19.1C28.0409 19.4977 26.4977 21.0409 26.1 23H25.8282L27.8282 25H32V6.99999H9.82819ZM30 8.99999H28.1707C28.472 9.8524 29.1476 10.528 30 10.8293V8.99999ZM28.1707 23C28.472 22.1476 29.1476 21.472 30 21.1707V23H28.1707Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default FeeNone32;
