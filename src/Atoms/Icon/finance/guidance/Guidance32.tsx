import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Guidance32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0002 4H26.0002V14H17.0002V16H25.5099L30.3987 21L25.5099 26H17.0002V29H22.0002V31H10.0002V29H15.0002V26H6.00015V16H15.0002V14H6.49045L1.60156 9L6.49045 4H15.0002V1H17.0002V4ZM7.33207 12H24.0002V6H7.33207L4.39874 9L7.33207 12ZM8.00015 18V24H24.6682L27.6016 21L24.6682 18H8.00015Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Guidance32;
