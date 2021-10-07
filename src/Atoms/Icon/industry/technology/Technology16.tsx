import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Technology16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0a3 3 0 00-1 5.83v4.584l2 2V16h2v-4.414l-2-2V5.829A3.001 3.001 0 008 0zM7 3a1 1 0 112 0 1 1 0 01-2 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6a3 3 0 101.293 5.708L6 13.414V16h2v-3.414l-2.292-2.293A3 3 0 003 6zM2 9a1 1 0 112 0 1 1 0 01-2 0zM10 7a3 3 0 113.97 2.84V16h-2V9.819A3.001 3.001 0 0110 7zm3-1a1 1 0 100 2 1 1 0 000-2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Technology16;
