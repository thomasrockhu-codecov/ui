import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExternalLink16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M13 11.9l2-2V1H6.1l-2 2h7.486L1.293 13.293l1.414 1.414L13 4.414V11.9z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ExternalLink16;
