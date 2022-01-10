import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Gold16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.27078 3H10.729L11.7725 7H14.229L15.7942 13H0.205566L1.77078 7H4.22731L5.27078 3ZM7.9999 9.95505L8.24904 9H7.75076L7.9999 9.95505ZM9.70557 7L9.18383 5H6.81598L6.29424 7H9.70557ZM10.316 9L9.79424 11H13.2056L12.6838 9H10.316ZM5.68383 9L6.20557 11H2.79424L3.31598 9H5.68383Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Gold16.displayName = 'Icon.Gold';

export default Gold16;
