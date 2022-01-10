import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PriceAlert16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.083c2.838.476 5 2.944 5 5.917v3.586l1 1V14h-5a2 2 0 11-4 0H1v-2.414l1-1V7a6.002 6.002 0 015-5.917V0h2v1.083zM8 3a4 4 0 00-4 4v4.414L3.414 12h9.172L12 11.414V7a4 4 0 00-4-4z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PriceAlert16.displayName = 'Icon.PriceAlert';

export default PriceAlert16;
