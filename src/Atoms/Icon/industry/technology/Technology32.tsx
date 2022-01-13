import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Technology32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 1a3.5 3.5 0 00-1 6.855v4.73l-4 4V31h2V17.414l4-4V7.855A3.502 3.502 0 0028 1zm-1.5 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11 4a3.5 3.5 0 00-1 6.855v5.56l4 4V31h2V19.586l-4-4v-4.73A3.502 3.502 0 0011 4zM9.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 12a3.5 3.5 0 101.326 6.74L9 22.414V31h2v-9.414l-4.11-4.11A3.5 3.5 0 004 12zm-1.5 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 11.5a3.5 3.5 0 114.5 3.355V31h-2V14.855a3.502 3.502 0 01-2.5-3.355zM20 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Technology32.displayName = 'Icon.Technology';

export default Technology32;
