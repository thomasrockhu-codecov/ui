import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Fee24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4142 1H1V11.4142L13 23.4142L23.4142 13L11.4142 1ZM3 10.5858L3 3L10.5858 3L20.5858 13L13 20.5858L3 10.5858Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Fee24;
