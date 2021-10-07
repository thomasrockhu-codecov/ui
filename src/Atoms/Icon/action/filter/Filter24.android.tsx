import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Filter24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 11l7-10H1l7 10v12l8-4v-8zm-2 6.764V10.37L19.159 3H4.84L10 10.37v9.394l4-2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Filter24;
