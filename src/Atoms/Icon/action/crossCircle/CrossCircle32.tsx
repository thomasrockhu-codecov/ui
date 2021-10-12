import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CrossCircle32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M8.05023 22.5356L14.5858 16L8.05023 9.46451L9.46445 8.05029L16 14.5858L22.5355 8.05029L23.9497 9.46451L17.4142 16L23.9497 22.5356L22.5355 23.9498L16 17.4143L9.46445 23.9498L8.05023 22.5356Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16ZM29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default CrossCircle32;
