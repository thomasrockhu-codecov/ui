import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const TransferDeposit64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <g fill="none">
        <path
          d="M36 20h1a15 15 0 1 1 0 30H23a15 15 0 1 1 0-30h1m-4 30v4h6v-4m8 0v4h6v-4M22 19c0-3-2-5-5-5h-1v8m6 9a3 3 0 0 0-5 0m35 1a4 4 0 0 0 4-6 2 2 0 1 0 1 2c1-2 0-4-2-5m-19-4a6 6 0 0 0-12 0m12 0c0 2-1 4-3 5h-6c-2-1-3-3-3-5m12 0v-4a6 6 0 0 0-12 0v4m-1 5h14M5 32h3v6H5v-6Zm26-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
    </IllustrationBase>
  );
};

export default TransferDeposit64;
