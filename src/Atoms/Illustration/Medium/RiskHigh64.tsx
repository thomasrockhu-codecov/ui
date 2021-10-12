import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const RiskHigh64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        d="M56.9804 42.0243H52V44.0261H59V43.0252C59 28.0996 46.9117 16 32 16C17.0883 16 5 28.0996 5 43.0252V44.0261H12V42.0243H7.01963C7.25576 36.016 9.60838 30.552 13.3519 26.3585L17.2458 30.2559L18.66 28.8404L14.743 24.9197C19.0055 20.8482 24.7036 18.2694 31 18.0215V23.0065H33V18.0215C39.2972 18.2695 44.996 20.8489 49.2586 24.9213L45.3431 28.8404L46.7574 30.256L50.6496 26.3601C54.3923 30.5534 56.7443 36.0168 56.9804 42.0243Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.0267 34.3258L40.6487 32.9465L29.2384 40.0846L29.1579 40.1652C27.5958 41.7288 27.5958 44.2638 29.1579 45.8273C30.72 47.3909 33.2526 47.3909 34.8147 45.8273L34.8953 45.7467L42.0267 34.3258ZM33.3261 44.4826C32.541 45.1928 31.3288 45.1692 30.5721 44.4118C29.8154 43.6544 29.7918 42.4411 30.5013 41.6552L38.034 36.9429L33.3261 44.4826Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default RiskHigh64;
