import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LineGraph16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M16 1.11322V4.60081L11.2586 11.3743L5.25855 7.37431L0 14.8865V11.3989L4.74124 4.62573L10.7412 8.62573L16 1.11322Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

LineGraph16.displayName = 'Icon.LineGraph';

export default LineGraph16;
