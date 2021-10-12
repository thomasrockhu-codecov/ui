import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Blog64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 8H56V26H49V55H47V26H42V38H16V22H32V17H14C12.3431 17 11 18.3431 11 20V55H9V20C9 17.2386 11.2386 15 14 15H32V8ZM32 24H18V36H40V26H39.3028L32 30.8685V24ZM34 10V27.1315L38.6972 24H54V10H34ZM51 15H37V13H51V15ZM46 20H37V18H46V20ZM42 43H16V41H42V43ZM42 48H16V46H42V48Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Blog64;
