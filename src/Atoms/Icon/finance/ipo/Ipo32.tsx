import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Ipo32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
        <path d="M19.52 8.27c-2.2 0-3.55 1.63-3.55 3.73s1.35 3.73 3.55 3.73c2.21 0 3.55-1.63 3.55-3.73s-1.34-3.73-3.55-3.73Zm0 1.4c1.18 0 1.93.9 1.93 2.33 0 1.44-.75 2.33-1.93 2.33-1.16 0-1.93-.89-1.93-2.33 0-1.43.77-2.33 1.93-2.33Z" />
        <path d="M7 8.45h1.58v7.1H7v-7.1Z" />
        <path d="M9.8 8.45h3.38c1.44 0 2.35.93 2.35 2.28 0 1.35-.9 2.27-2.35 2.27h-1.8v2.55h-1.6v-7.1Zm4.16 2.28c0-.63-.42-.98-1.08-.98h-1.52v1.95h1.52c.66 0 1.08-.35 1.08-.97Z" />
        <path d="M7 4V1H5v3H2v16h3v9H2v2h8v-2H7v-9h18.58l4.57-8-4.57-8H7ZM4 18V6h20.42l3.43 6-3.43 6H4Z" />
      </g>
    </IconBase>
  );
};

Ipo32.displayName = 'Icon.Ipo';

export default Ipo32;
