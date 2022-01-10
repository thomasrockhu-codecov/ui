import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const BarGraph32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M29 26V2h-2v24h2Zm-14 0h2V6h-2v20ZM5 26V16H3v10h2Zm25 4H2v-2h28v2ZM11 20v6H9v-6h2Zm12-8v14h-2V12h2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

BarGraph32.displayName = 'Icon.BarGraph';

export default BarGraph32;
