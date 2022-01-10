import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LineGraph32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M2 21.4291V24.3888L12.1751 13.2888L20.204 18.3069L30 6.7298V3.63354L19.7957 15.6932L11.8246 10.7113L2 21.4291Z"
        fill="currentColor"
      />
      <path d="M2 30H30V28H2V30Z" fill="currentColor" />
    </IconBase>
  );
};

LineGraph32.displayName = 'Icon.LineGraph';

export default LineGraph32;
