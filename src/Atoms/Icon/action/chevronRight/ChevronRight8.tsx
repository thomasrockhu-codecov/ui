import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronRight8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={9}>
      <path d="M.586 8.014l4-4-4-4h2.828l4 4-4 4H.586z" fill="currentColor" />
    </IconBase>
  );
};

export default ChevronRight8;
