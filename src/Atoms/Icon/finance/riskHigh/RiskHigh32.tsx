import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RiskHigh32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.03789 21H6V23H1V22C1 13.7157 7.71573 7 16 7C24.2843 7 31 13.7157 31 22V23H26V21H28.9621C28.7384 18.059 27.5361 15.3916 25.6801 13.3225L18.5629 20.4398C18.8402 20.8944 19 21.4285 19 22C19 23.6569 17.6569 25 16 25C14.3431 25 13 23.6569 13 22C13 20.3431 14.3431 19 16 19C16.3516 19 16.6891 19.0605 17.0026 19.1716L24.2344 11.9399C22.2337 10.3004 19.7351 9.24596 17 9.03789V12H15V9.03789C12.2654 9.24591 9.76736 10.3 7.76692 11.9389L10.0423 14.2142L8.62808 15.6284L6.32096 13.3213C4.46437 15.3905 3.26166 18.0585 3.03789 21ZM16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

RiskHigh32.displayName = 'Icon.RiskHigh';

export default RiskHigh32;
