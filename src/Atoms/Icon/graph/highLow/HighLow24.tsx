import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const HighLow24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7.58578L9 0.585785L2 7.58578V13H16V7.58578ZM4 11V8.41421L9 3.41421L14 8.41421V11H4Z"
        fill="currentColor"
      />
      <path
        d="M8 16.4142V15H10V15.5858L15 20.5858L20 15.5858V13L18 13V11H22V16.4142L15 23.4142L8 16.4142Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default HighLow24;
