import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Approve24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M17 16H7v-2h10v2ZM7 18v2h6v-2H7ZM8.70718 6.62132l2.12132 2.12132L15.0711 4.5l1.4143 1.41421-5.6569 5.65689-3.53553-3.53557 1.41421-1.41421Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0v24h18V0H3Zm16 2H5v20h14V2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Approve24;
