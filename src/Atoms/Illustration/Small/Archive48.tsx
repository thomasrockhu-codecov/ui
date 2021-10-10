import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Archive48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path d="M18 24V21H16V26H32V21H30V24H18Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4H46V15H43V44H5V15H2V4ZM7 15V42H41V15H7ZM4 6V13H44V6H4Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Archive48;
