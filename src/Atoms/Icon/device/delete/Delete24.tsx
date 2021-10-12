import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Delete24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M12.586 12l-2.293-2.293 1.414-1.414L14 10.586l2.293-2.293 1.414 1.414L15.414 12l2.293 2.293-1.414 1.414L14 13.414l-2.293 2.293-1.414-1.414L12.586 12z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.54 4H23v16H7.54L.683 12 7.54 4zm.92 2l-5.143 6 5.143 6H21V6H8.46z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Delete24;
