import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ClockFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM17 7V15H25V17H15V7H17Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ClockFill32.displayName = 'Icon.ClockFill';

export default ClockFill32;
