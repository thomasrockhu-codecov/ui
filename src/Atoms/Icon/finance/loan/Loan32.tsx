import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Loan32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1H30V31H28V3H10V17H25V31H2V17H8V1ZM4 19V29H23V19H4ZM12.5 24C12.5 23.4477 12.9477 23 13.5 23C14.0523 23 14.5 23.4477 14.5 24C14.5 24.5523 14.0523 25 13.5 25C12.9477 25 12.5 24.5523 12.5 24ZM13.5 21C11.8431 21 10.5 22.3431 10.5 24C10.5 25.6569 11.8431 27 13.5 27C15.1569 27 16.5 25.6569 16.5 24C16.5 22.3431 15.1569 21 13.5 21ZM25 8L21 8V6L25 6V8ZM13 14H25V12H13V14Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Loan32.displayName = 'Icon.Loan';

export default Loan32;
