import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FeeNone24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M21.2998 22.7142L1.2998 2.7142L2.71402 1.29999L22.714 21.3L21.2998 22.7142Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5H2.17154L5.07758 7.90604C4.49672 9.14653 3.36645 10.0784 2 10.3885V13.6115C3.68238 13.9933 5.00674 15.3176 5.38849 17H14.1715L16.1716 19H0V5ZM2 8.29198V7H3.29198C3.04 7.57672 2.57672 8.04 2 8.29198ZM3.29198 17C3.04 16.4233 2.57672 15.96 2 15.708V17H3.29198Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8284 5L9.8284 7H18.6115C18.9933 8.68238 20.3176 10.0067 22 10.3885V13.1115C20.5068 13.4503 19.2957 14.5317 18.7752 15.9468L21.8284 19H24V5H7.8284ZM20.708 7C20.96 7.57672 21.4233 8.04 22 8.29198V7H20.708ZM22 15.208C21.2645 15.5294 20.7136 16.1943 20.55 17H22V15.208Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default FeeNone24;
