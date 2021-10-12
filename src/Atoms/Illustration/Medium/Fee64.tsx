import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Fee64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7782 13.7782C12.2161 15.3403 12.2161 17.8729 13.7782 19.435C15.3403 20.9971 17.8729 20.9971 19.435 19.435C20.9971 17.8729 20.9971 15.3403 19.435 13.7782C17.8729 12.2161 15.3403 12.2161 13.7782 13.7782ZM15.1924 18.0208C14.4113 17.2398 14.4113 15.9734 15.1924 15.1924C15.9734 14.4113 17.2398 14.4113 18.0208 15.1924C18.8019 15.9734 18.8019 17.2398 18.0208 18.0208C17.2398 18.8019 15.9734 18.8019 15.1924 18.0208Z"
        fill="currentColor"
      />
      <path
        d="M35.3345 46.6482L18.0208 29.3345L19.435 27.9203L36.7487 45.234L35.3345 46.6482Z"
        fill="currentColor"
      />
      <path
        d="M22.9706 24.3848L39.9411 41.3553L41.3553 39.9411L24.3848 22.9706L22.9706 24.3848Z"
        fill="currentColor"
      />
      <path
        d="M32.163 23.6777L27.9203 19.435L29.3345 18.0208L33.5772 22.2635L32.163 23.6777Z"
        fill="currentColor"
      />
      <path
        d="M37.8198 29.3345L44.8909 36.4056L46.3051 34.9914L39.234 27.9203L37.8198 29.3345Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.4558 5H5V30.4558L33.5772 59.033L59.033 33.5772L30.4558 5ZM33.5772 56.2046L7 29.6274L7 7L29.6274 7L56.2046 33.5772L33.5772 56.2046Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Fee64;
