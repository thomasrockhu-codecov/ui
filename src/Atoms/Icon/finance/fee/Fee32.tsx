import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Fee32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6ZM8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4142 1H1V14.4142L18 31.4142L31.4142 18L14.4142 1ZM3 13.5858V3H13.5858L28.5858 18L18 28.5858L3 13.5858Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Fee32;
