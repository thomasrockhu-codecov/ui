import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Dislike24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16C2.89543 16 2 15.1046 2 14V4H6C6.70214 4 7.31977 4.36182 7.67661 4.90917L8.58579 4H16.6577C18.4931 4 20.0931 5.24919 20.5382 7.02986L22.0382 13.0299C22.6694 15.5544 20.76 18 18.1577 18H14V20C14 22.2091 12.2091 24 10 24H8V17.4142L6.58579 16H4ZM6 14V6H4V14H6ZM8 14.5858L10 16.5858V22C11.1046 22 12 21.1046 12 20V16H18.1577C19.4588 16 20.4135 14.7772 20.098 13.5149L18.598 7.51493C18.3754 6.62459 17.5754 6 16.6577 6H9.41421L8 7.41421V14.5858Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Dislike24.displayName = 'Icon.Dislike';

export default Dislike24;
