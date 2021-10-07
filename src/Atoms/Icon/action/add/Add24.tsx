import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Add24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M11 13v10h2V13h10v-2H13V1h-2v10H1v2h10z" fill="currentColor" />
    </IconBase>
  );
};

export default Add24;
