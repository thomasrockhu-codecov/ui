import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Refresh48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        d="M32.3995 8.01471L24.4142 16H21.5858L28.5858 9H24C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24H41C41 33.3888 33.3888 41 24 41C14.6112 41 7 33.3888 7 24C7 14.6112 14.6112 7 24 7H28.5563L21.5563 0H24.3848L32.3995 8.01471Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Refresh48;
