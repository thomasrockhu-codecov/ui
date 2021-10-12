import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Energy16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.263 0h8.303L11.71 5h3.179L6.332 16H3.597l1.555-7H1.12l5.143-9zm1.16 2L4.567 7h3.08l-1.262 5.676L10.8 7H8.263l2.857-5H7.424z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Energy16;
