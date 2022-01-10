import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CrossCircle16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M6.58579 7.99999L4.46447 10.1213L5.87868 11.5355L8 9.41421L10.1213 11.5355L11.5355 10.1213L9.41421 7.99999L11.5355 5.87867L10.1213 4.46446L8 6.58578L5.87868 4.46446L4.46447 5.87867L6.58579 7.99999Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

CrossCircle16.displayName = 'Icon.CrossCircle';

export default CrossCircle16;
