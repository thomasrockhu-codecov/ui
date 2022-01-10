import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Orders24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <g fill="currentColor">
        <path d="M4.00027 4.99998C4.00028 4.44771 4.44799 4 5.00027 4H19C19.5523 4 20 4.44772 20 5V22H22V5C22 3.34315 20.6569 2 19 2H5.00027C3.34344 2 2.0003 3.34312 2.00027 4.99995L2 22L4 22L4.00027 4.99998Z M6 9H18V7H6V9Z M18 14H6V12H18V14Z M6 19H12V17H6V19Z" />
      </g>
    </IconBase>
  );
};

Orders24.displayName = 'Icon.Orders';

export default Orders24;
