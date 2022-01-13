import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Like24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0H8V6.58579L6.58579 8H4C2.89543 8 2 8.89543 2 10V20H6C6.70214 20 7.31977 19.6382 7.67661 19.0908L8.58579 20H16.6577C18.4931 20 20.0931 18.7508 20.5382 16.9701L22.0382 10.9701C22.6694 8.44556 20.76 6 18.1577 6H14V4C14 1.79086 12.2091 0 10 0ZM8 16.5858L9.41421 18H16.6577C17.5754 18 18.3754 17.3754 18.598 16.4851L20.098 10.4851C20.4135 9.22278 19.4588 8 18.1577 8H12V4C12 2.89543 11.1046 2 10 2V7.41421L8 9.41421V16.5858ZM6 10H4V18H6V10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Like24.displayName = 'Icon.Like';

export default Like24;
