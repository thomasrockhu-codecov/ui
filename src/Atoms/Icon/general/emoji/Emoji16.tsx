import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Emoji16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fill="none"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"
        stroke="currentColor"
        strokeWidth={1.05}
        strokeMiterlimit={10}
      />
      <path
        d="M11.36 9.575a3.697 3.697 0 0 1-3.395 2.24 3.656 3.656 0 0 1-3.377-2.222v-.018h6.772Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.05}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
      <path
        d="M4.815 6.513a1.032 1.032 0 1 0 0-2.065 1.032 1.032 0 0 0 0 2.065ZM11.063 6.513a1.033 1.033 0 1 0 0-2.065 1.033 1.033 0 0 0 0 2.065Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Emoji16.displayName = 'Icon.Emoji';

export default Emoji16;
