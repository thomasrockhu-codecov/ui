import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Stock32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M20.2494 9.00557L22.3058 7H32V16.454L29.9436 18.4595V10.6403L20.1589 21.3761L10.6136 14.7265L1.62321 26L0 24.7687L10.2024 11.9754L19.85 18.6963L28.6822 9.00557H20.2494Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Stock32;
