import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Compare16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.2457 0L0 7.85994V8C0 9.65685 1.34315 11 3 11C4.65685 11 6 9.65685 6 8V7.85994L4.32573 2H7V14H4V16H12V14H9V2H11.6743L10 7.85994V8C10 9.65685 11.3431 11 13 11C14.6569 11 16 9.65685 16 8V7.85994L13.7543 0H2.2457ZM3 4.64005L3.95998 8H2.04002L3 4.64005ZM12.04 8L13 4.64005L13.96 8H12.04Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Compare16;
