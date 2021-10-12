import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SortAscending16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M12 8.17155V11L8.00249 14.9975L3.99999 10.995L3.99999 8.16655L7.00249 11.169L7.0025 1.00244L9.0025 1.00244L9.00249 11.169L12 8.17155Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default SortAscending16;
