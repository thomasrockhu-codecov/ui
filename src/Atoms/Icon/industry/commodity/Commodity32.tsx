import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Commodity32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M16 23a3 3 0 01-3-3h-2a5 5 0 005 5v-2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4l.708-.706.003.003.006.006.021.022a18.454 18.454 0 01.376.39 51.358 51.358 0 014.198 5.087c1.147 1.596 2.31 3.434 3.19 5.338C25.377 16.034 26 18.056 26 20c0 5.523-4.477 10-10 10S6 25.523 6 20c0-1.714.637-3.62 1.503-5.447.875-1.847 2.032-3.71 3.175-5.36a66.675 66.675 0 014.549-5.828l.02-.024.006-.006.003-.003L16 4zm-.632 2.293c.25-.306.474-.575.666-.803a49.345 49.345 0 013.654 4.48c1.103 1.533 2.19 3.259 2.998 5.009C23.499 16.738 24 18.459 24 20a8 8 0 11-16 0c0-1.272.488-2.858 1.31-4.59.812-1.714 1.904-3.478 3.012-5.08a64.676 64.676 0 013.046-4.037z"
        fill="currentColor"
      />
      <path d="M16 4l.708-.706-.746-.749-.706.787L16 4z" fill="currentColor" />
    </IconBase>
  );
};

export default Commodity32;
