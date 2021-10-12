import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const RiskLow64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        d="M7.01963 42H12V44H5V43C5 28.0883 17.0883 16 32 16C46.9117 16 59 28.0883 59 43V44H52V42H56.9804C56.7442 35.9973 54.3916 30.5384 50.6481 26.3488L46.7542 30.2426L45.34 28.8284L49.257 24.9114C44.9945 20.8437 39.2964 18.2673 33 18.0196V23H31V18.0196C24.7028 18.2674 19.004 20.8443 14.7414 24.913L18.6569 28.8285L17.2426 30.2427L13.3504 26.3505C9.60775 30.5399 7.25574 35.9981 7.01963 42Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9733 34.3087L23.3513 32.9307L34.7616 40.0621L34.8421 40.1427C36.4042 41.7048 36.4042 44.2374 34.8421 45.7995C33.28 47.3616 30.7474 47.3616 29.1853 45.7995L29.1047 45.719L21.9733 34.3087ZM30.6739 44.4561C31.459 45.1656 32.6712 45.142 33.4279 44.3853C34.1846 43.6286 34.2082 42.4164 33.4987 41.6313L25.966 36.9234L30.6739 44.4561Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default RiskLow64;
