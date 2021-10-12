import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const MonthlySavings24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M7 11H5v2h2v-2zM5 16h2v2H5v-2zM11 11H9v2h2v-2zM13 11h2v2h-2v-2zM11 16H9v2h2v-2zM13 16h2v2h-2v-2zM19 11h-2v2h2v-2zM18 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0v1h10V0h2v1h4v22H1V1h4V0h2zm0 3h10v1h2V3h2v3H3V3h2v1h2V3zM3 8v13h18V8H3z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default MonthlySavings24;
