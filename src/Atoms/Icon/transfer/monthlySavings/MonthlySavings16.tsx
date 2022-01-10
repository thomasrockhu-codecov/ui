import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const MonthlySavings16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M4.5 1v.5h7v-1h1v1h3v14H.5v-14h3v-1h1V1zm-1 2v-.5h-2v3h13v-3h-2v1h-1v-1h-7v1h-1V3zM2 6.5h-.5v8h13v-8H2zm10.5 5a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
        stroke="currentColor"
      />
    </IconBase>
  );
};

MonthlySavings16.displayName = 'Icon.MonthlySavings';

export default MonthlySavings16;
