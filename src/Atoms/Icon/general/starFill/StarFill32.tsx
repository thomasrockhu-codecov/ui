import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const StarFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M16 2l5.076 8.466 9.59 2.229-6.453 7.462.851 9.843L16 26.146 6.935 30l.851-9.843-6.453-7.462 9.59-2.23L16 2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

StarFill32.displayName = 'Icon.StarFill';

export default StarFill32;
