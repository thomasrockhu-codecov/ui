import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Error32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <g fill="currentColor">
        <path d="M17 20V8L15 8.00004V20.0001L17 20Z" />
        <path d="M17 24.0001V22L15 22.0001V24.0001L17 24.0001Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.4142 1H9.58579L1 9.58579V22.4142L9.58579 31H22.4142L31 22.4142V9.58579L22.4142 1ZM3 10.4142L10.4142 3H21.5858L29 10.4142V21.5858L21.5858 29H10.4142L3 21.5858V10.4142Z"
        />
      </g>
    </IconBase>
  );
};

Error32.displayName = 'Icon.Error';

export default Error32;
