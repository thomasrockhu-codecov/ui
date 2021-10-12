import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CrossCircle24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M10.5858 12L7.05025 15.5355L8.46447 16.9497L12 13.4142L15.5355 16.9497L16.9497 15.5355L13.4142 12L16.9497 8.46446L15.5355 7.05024L12 10.5858L8.46447 7.05024L7.05025 8.46446L10.5858 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default CrossCircle24;
