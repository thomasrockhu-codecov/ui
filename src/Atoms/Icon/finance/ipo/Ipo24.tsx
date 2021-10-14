import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Ipo24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
        <path d="M12.68 9.16c0-1.68 1.08-2.98 2.85-2.98s2.84 1.3 2.84 2.98-1.07 2.98-2.84 2.98c-1.77 0-2.85-1.3-2.85-2.98Zm4.39 0c0-1.14-.6-1.86-1.54-1.86-.93 0-1.55.72-1.55 1.86 0 1.15.62 1.86 1.55 1.86.95 0 1.54-.7 1.54-1.86Z" />
        <path d="M6.78 6.32H5.5V12h1.27V6.32Z" />
        <path d="M10.46 6.32H7.75V12H9V9.96h1.45c1.15 0 1.88-.74 1.88-1.82s-.73-1.82-1.88-1.82Zm-.24 1.04c.53 0 .86.28.86.78s-.33.78-.86.78H9V7.36h1.22Z" />
        <path d="M19.57 3H6V1H4v2H2v12h2v6H2v2h6v-2H6v-6h13.57l3.6-6-3.6-6ZM4 5v8h14.43l2.4-4-2.4-4H4Z" />
      </g>
    </IconBase>
  );
};

export default Ipo24;
