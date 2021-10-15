import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Ohlc16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M13 0H11V2H9V4H11V12H13V10H15V8H13V0Z" fill="currentColor" />
      <path d="M5 4H3V12H1V14H3V16H5V8H7V6H5V4Z" fill="currentColor" />
    </IconBase>
  );
};

export default Ohlc16;
