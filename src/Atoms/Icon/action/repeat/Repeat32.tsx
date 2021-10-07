import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Repeat32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M16 4C9.373 4 4 9.373 4 16H2C2 8.268 8.268 2 16 2c5.093 0 9.55 2.72 12 6.785V3l2 2v8h-8l-2-2h6.912C25.016 6.869 20.843 4 16 4zM16 28c6.627 0 12-5.373 12-12h2c0 7.732-6.268 14-14 14-5.093 0-9.55-2.72-12-6.785V29l-2-2v-8h8l2 2H5.088c1.896 4.131 6.069 7 10.912 7z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Repeat32;
