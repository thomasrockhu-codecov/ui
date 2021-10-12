import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const ArrowDown48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        d="M25 4H23V40.1716L10 27.1716V30L23.9995 43.9995L38 29.999V27.1706L25 40.1706V4Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default ArrowDown48;
