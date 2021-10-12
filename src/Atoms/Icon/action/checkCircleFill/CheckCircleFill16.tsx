import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CheckCircleFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.5356 5.93551L6.52516 11.9459L2.98962 8.41039L4.40384 6.99618L6.52516 9.11749L11.1214 4.5213L12.5356 5.93551Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default CheckCircleFill16;
