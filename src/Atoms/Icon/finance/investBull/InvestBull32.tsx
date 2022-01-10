import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InvestBull32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 14.86a7.03 7.03 0 0 1-4.07-2.91A11.3 11.3 0 0 1 1 5.47C1 3.7 1.37 2.02 2.02.6l1.91.5A7.83 7.83 0 0 0 5.2 6.3c.7.99 1.58 1.6 2.5 1.78A3 3 0 0 1 10 7h12a3 3 0 0 1 2.3 1.07c.92-.18 1.8-.8 2.5-1.8a7.83 7.83 0 0 0 1.27-5.19l1.9-.5A11.84 11.84 0 0 1 31 5.49c0 2.47-.72 4.75-1.93 6.47-.32.45-.67.86-1.06 1.23l-1.41-1.41c.3-.28.58-.6.84-.97a8.95 8.95 0 0 0 1.5-4.2 8.3 8.3 0 0 1-.5.83A6.23 6.23 0 0 1 25 9.96v2.21l-2 2V10a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v8.67l3 4V27a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.34l2-2V27a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-3.67l-3-4v-4.47ZM4.56 10.8a8.95 8.95 0 0 1-1.5-4.2c.16.3.32.57.5.83A6.23 6.23 0 0 0 7 9.96v2.82c-.9-.33-1.75-1-2.44-1.98Z"
        fill="currentColor"
      />
      <path
        d="M11 14a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1v-1h-2v1Zm3 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-10a3 3 0 0 0 3-3v-1h-2v1a1 1 0 0 1-1 1v2Zm9 .83 3 3V18l-4-4-4 4v2.83l3-3V26h2v-8.17Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

InvestBull32.displayName = 'Icon.InvestBull';

export default InvestBull32;
