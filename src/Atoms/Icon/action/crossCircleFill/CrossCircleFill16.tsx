import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CrossCircleFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.46448 10.1213L6.5858 7.99998L4.46448 5.87866L5.87869 4.46445L8.00001 6.58577L10.1213 4.46445L11.5355 5.87866L9.41422 7.99998L11.5355 10.1213L10.1213 11.5355L8.00001 9.4142L5.87869 11.5355L4.46448 10.1213Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default CrossCircleFill16;
