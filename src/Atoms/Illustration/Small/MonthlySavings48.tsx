import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const MonthlySavings48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 9V11H11V9H6V14H42V9H37V11H35V9H13ZM13 7H35V5H37V7H44V44H4V7H11V5H13V7ZM42 16H6V42H42V16ZM14 23H10V21H14V23ZM22 23H18V21H22V23ZM30 23H26V21H30V23ZM38 23H34V21H38V23ZM14 30H10V28H14V30ZM22 30H18V28H22V30ZM30 30H26V28H30V30ZM38 30H34V28H38V30ZM33 36C33 34.3431 34.3431 33 36 33C37.6569 33 39 34.3431 39 36C39 37.6569 37.6569 39 36 39C34.3431 39 33 37.6569 33 36ZM36 35C35.4477 35 35 35.4477 35 36C35 36.5523 35.4477 37 36 37C36.5523 37 37 36.5523 37 36C37 35.4477 36.5523 35 36 35ZM14 37H10V35H14V37ZM22 37H18V35H22V37ZM30 37H26V35H30V37Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default MonthlySavings48;
