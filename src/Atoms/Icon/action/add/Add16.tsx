import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Add16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M7 9v7h2V9h7V7H9V0H7v7H0v2h7z" fill="currentColor" />
    </IconBase>
  );
};

export default Add16;
