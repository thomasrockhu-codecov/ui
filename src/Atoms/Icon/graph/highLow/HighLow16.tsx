import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const HighLow16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5.58594L5 0.585938L0 5.58594V9.00015H10V5.58594ZM2 7.00015V6.41436L5 3.41436L8 6.41436V7.00015H2Z"
        fill="currentColor"
      />
      <path
        d="M6 10.4142V10.0002H8.41437L11 12.5858L14 9.58579V9H11V7L16 7V10.4142L11 15.4142L6 10.4142Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default HighLow16;
