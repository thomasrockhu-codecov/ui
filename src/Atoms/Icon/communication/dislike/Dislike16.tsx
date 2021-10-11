import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Dislike16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11.4142L4.58579 11H2C0.895431 11 0 10.1046 0 9V2H4C4.70214 2 5.31977 2.36182 5.67661 2.90917L6.58579 2H11.3401C12.7838 2 14.0227 3.02822 14.2888 4.44713L15.0388 8.44713C15.3849 10.2934 13.9686 12 12.0901 12H10C10 14.2091 8.20914 16 6 16H5V11.4142ZM7 13.7324V10.5858L6 9.58579V5.41421L7.41421 4H11.3401C11.8214 4 12.2343 4.34274 12.323 4.81571L13.073 8.81571C13.1884 9.43113 12.7163 10 12.0901 10H8V12C8 12.7403 7.5978 13.3866 7 13.7324ZM2 9H4V4H2V9Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Dislike16;
