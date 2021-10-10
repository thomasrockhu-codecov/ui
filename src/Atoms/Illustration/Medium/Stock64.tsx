import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Stock64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        d="M17 50H13V35.3958L24.0698 23.6026L37.6799 33.7996L49.9999 19.6688V25.0711L51.9999 23.0711V16H44.929L42.929 18H48.8015L37.3929 31.0855L23.8366 20.9288L13 32.4735V11H11V52H52V50H46V35H44V50H37V42H35V50H28V35H26V50H19V42H17V50Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Stock64;
