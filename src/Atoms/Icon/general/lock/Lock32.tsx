import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Lock32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 10a5 5 0 0110 0h2a7 7 0 10-14 0h2zm19 19V11H2v18h28zM4 27V13h24v14H4z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Lock32;
