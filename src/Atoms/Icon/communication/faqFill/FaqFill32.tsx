import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FaqFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 8V3H2v21.869l5-3.334V25h15.698L30 29.869V8h-5zM9.302 20H25V10h3v16.13L23.303 23H9v-2.799L9.302 20zm4.744-6.614h-1.834v-.237c0-.933 0-1.37 1.414-2.521l.134-.109c.552-.448.972-.79.972-1.347 0-.532-.378-.952-1.134-.952-.784 0-1.218.49-1.4 1.078h-2.114c.28-1.904 1.708-2.898 3.556-2.898 1.946 0 3.276 1.036 3.276 2.674 0 1.092-.462 1.666-1.708 2.73l-.051.043c-.561.467-.96.8-1.069 1.329l-.042.21zm-1.988.98h2.198v2.226h-2.198v-2.226z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default FaqFill32;
