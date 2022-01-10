import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path
        d="M1.504 2.648L3.126 4.27 6.496.9 7.91 2.314 3.126 7.098.09 4.062l1.414-1.414z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Check8.displayName = 'Icon.Check';

export default Check8;
