import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Orders48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        fill="currentColor"
        d="M4 10C4 7.79086 5.79086 6 8 6H32C34.2091 6 36 7.79086 36 10V15H40C42.2091 15 44 16.7909 44 19V42H42V19C42 17.8954 41.1046 17 40 17H36V42H34V10C34 8.89543 33.1046 8 32 8H8C6.89543 8 6 8.89543 6 10V42H4V10Z"
      />
      <path fill="currentColor" d="M10 17H30V15H10V17Z" />
      <path fill="currentColor" d="M30 24H10V22H30V24Z" />
      <path fill="currentColor" d="M10 31H20V29H10V31Z" />
    </IllustrationBase>
  );
};

export default Orders48;
