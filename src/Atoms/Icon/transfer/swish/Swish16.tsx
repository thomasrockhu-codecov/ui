import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Swish16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M12.531 1.387l.394.308a8 8 0 01-5.082 14.302l-.288-.01.017-1a5.499 5.499 0 003.481-9.672l-.188-.154-.185-.139-.644-.442 2.495-3.193zM8.163 0l.273.01-.008 1a5.499 5.499 0 00-3.481 9.672l.188.155.185.138.644.442-2.495 3.193-.394-.307A8 8 0 017.572.01l.3-.011h.291z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Swish16;
