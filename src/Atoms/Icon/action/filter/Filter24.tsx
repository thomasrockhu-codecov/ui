import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Filter24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M1 4h22v2H1V4zM4 11h16v2H4v-2zM17 18H7v2h10v-2z" fill="currentColor" />
    </IconBase>
  );
};

export default Filter24;
