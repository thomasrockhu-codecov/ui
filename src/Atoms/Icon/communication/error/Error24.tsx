import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Error24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.444 1h9.112L23 7.444v9.112L16.556 23H7.444L1 16.556V7.444L7.444 1zm.828 2L3 8.272v7.456L8.272 21h7.456L21 15.728V8.272L15.728 3H8.272z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 6v8h-2V6h2zM13 16v2h-2v-2h2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Error24;
