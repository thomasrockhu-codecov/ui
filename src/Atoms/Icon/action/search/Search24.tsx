import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Search24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 1.5a8 8 0 104.906 14.32l6.387 6.387 1.414-1.414-6.387-6.387A8 8 0 009.5 1.5zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Search24;
