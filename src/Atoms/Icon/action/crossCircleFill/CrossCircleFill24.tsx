import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CrossCircleFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.05025 15.5355L10.5858 12L7.05025 8.46445L8.46446 7.05023L12 10.5858L15.5355 7.05023L16.9497 8.46445L13.4142 12L16.9497 15.5355L15.5355 16.9497L12 13.4142L8.46446 16.9497L7.05025 15.5355Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

CrossCircleFill24.displayName = 'Icon.CrossCircleFill';

export default CrossCircleFill24;
