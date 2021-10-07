import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Filter16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.131 0h15.737L11 7.303v5.315l-6 3V7.303L.131 0zm3.737 2L7 6.697v5.685l2-1V6.697L12.132 2H3.868z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Filter16;
