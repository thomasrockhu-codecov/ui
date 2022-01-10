import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FundVariety16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0H0V7H7V0ZM2 5V2H5V5H2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9H9V16H16V9ZM11 14V11H14V14H11Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75015 8.58578L7.41436 12.25L3.75015 15.9142L0.0859375 12.25L3.75015 8.58578ZM2.91436 12.25L3.75015 13.0858L4.58594 12.25L3.75015 11.4142L2.91436 12.25Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9144 3.75L12.2502 0.0857849L8.58594 3.75L12.2502 7.41421L15.9144 3.75ZM12.2502 4.58578L11.4144 3.75L12.2502 2.91421L13.0859 3.75L12.2502 4.58578Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

FundVariety16.displayName = 'Icon.FundVariety';

export default FundVariety16;
