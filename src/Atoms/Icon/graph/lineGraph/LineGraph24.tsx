import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LineGraph24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M23 1.48694V5.5211L16.646 16.6518L7.97929 10.2882L1 22.5141V18.4799L7.35463 7.34824L16.0213 13.7119L23 1.48694Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

LineGraph24.displayName = 'Icon.LineGraph';

export default LineGraph24;
