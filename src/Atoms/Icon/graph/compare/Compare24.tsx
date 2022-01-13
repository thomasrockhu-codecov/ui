import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Compare24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 5L6.443 5L9 11.8187V12C9 14.2123 7.21229 16 5 16C2.78772 16 1 14.2123 1 12V11.8187L4.307 3H19.693L23 11.8187V12C23 14.2123 21.2123 16 19 16C16.7877 16 15 14.2123 15 12V11.8187L17.557 5L13 5L13 21H16V23H8V21H11L11 5ZM6.182 10L5 6.848L3.818 10H6.182ZM6.932 12H3.068L3.00656 12.1638C3.08943 13.1944 3.94746 14 5 14C6.05254 14 6.91057 13.1944 6.99344 12.1638L6.932 12ZM19 6.848L17.818 10H20.182L19 6.848ZM17.0066 12.1638L17.068 12H20.932L20.9934 12.1638C20.9106 13.1944 20.0525 14 19 14C17.9475 14 17.0894 13.1944 17.0066 12.1638Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Compare24.displayName = 'Icon.Compare';

export default Compare24;
