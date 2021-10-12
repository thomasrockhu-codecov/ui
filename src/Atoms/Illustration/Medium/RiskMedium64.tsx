import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const RiskMedium64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        d="M7.01963 42H12V44H5V43C5 28.0883 17.0883 16 32 16C46.9117 16 59 28.0883 59 43V44H52V42H56.9804C56.7442 35.9973 54.3916 30.5384 50.6481 26.3488L46.7542 30.2426L45.34 28.8284L49.257 24.9114C44.9946 20.8437 39.2964 18.2673 33 18.0196V23H31V18.0196C24.7028 18.2674 19.004 20.8443 14.7413 24.913L18.6568 28.8285L17.2426 30.2427L13.3504 26.3505C9.60775 30.5399 7.25573 35.9981 7.01963 42Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0256 29.7751H32.9744L36 42.8861V43C36 45.2091 34.2091 47 32 47C29.7909 47 28 45.2091 28 43V42.8861L31.0256 29.7751ZM30.0026 43.1027C30.056 44.1595 30.9299 45 32 45C33.0701 45 33.944 44.1595 33.9974 43.1027L32 34.4472L30.0026 43.1027Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default RiskMedium64;
