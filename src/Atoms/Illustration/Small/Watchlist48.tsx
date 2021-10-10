import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Watchlist48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8H4V16H12V8ZM6 14V10H10V14H6Z"
      />
      <path fill="currentColor" d="M28 11H16V9H28V11Z" />
      <path fill="currentColor" d="M16 15H44V13H16V15Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 20H12V28H4V20ZM6 22V26H10V22H6Z"
      />
      <path fill="currentColor" d="M16 23H28V21H16V23Z" />
      <path fill="currentColor" d="M44 27H16V25H44V27Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 32H4V40H12V32ZM6 38V34H10V38H6Z"
      />
      <path fill="currentColor" d="M28 35H16V33H28V35Z" />
      <path fill="currentColor" d="M44 39H16V37H44V39Z" />
    </IllustrationBase>
  );
};

export default Watchlist48;
