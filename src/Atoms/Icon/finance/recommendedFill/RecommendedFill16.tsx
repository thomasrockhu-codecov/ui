import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RecommendedFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8.74877 12H6.46647L3.7998 7H6.06647L7.61273 9.89924L12.3007 1.25313C11.0587 0.459797 9.58303 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 5.89963 15.1906 3.9883 13.8666 2.56095L8.74877 12Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default RecommendedFill16;
