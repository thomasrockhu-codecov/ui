import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Money64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 32C28 29.7909 29.7909 28 32 28C34.2091 28 36 29.7909 36 32C36 34.2091 34.2091 36 32 36C29.7909 36 28 34.2091 28 32ZM32 30C30.8954 30 30 30.8954 30 32C30 33.1046 30.8954 34 32 34C33.1046 34 34 33.1046 34 32C34 30.8954 33.1046 30 32 30Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 23H17V24C17 25.6569 15.6569 27 14 27H13V37H14C15.6569 37 17 38.3431 17 40V41H47V40C47 38.3431 48.3431 37 50 37H51V27H50C48.3431 27 47 25.6569 47 24V23ZM15 28.9C16.9591 28.5023 18.5023 26.9591 18.9 25H45.1C45.4977 26.9591 47.0409 28.5023 49 28.9V35.1C47.0409 35.4977 45.4977 37.0409 45.1 39H18.9C18.5023 37.0409 16.9591 35.4977 15 35.1V28.9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 18H56V46H8V18ZM10 20V22.874C11.4056 22.5122 12.5122 21.4056 12.874 20H10ZM10 44V41.126C11.4056 41.4878 12.5122 42.5944 12.874 44H10ZM14.917 44C14.4955 41.4875 12.5125 39.5045 10 39.083V24.917C12.5125 24.4955 14.4955 22.5125 14.917 20H49.083C49.5045 22.5125 51.4875 24.4955 54 24.917V39.083C51.4875 39.5045 49.5045 41.4875 49.083 44H14.917ZM54 22.874V20H51.126C51.4878 21.4056 52.5944 22.5122 54 22.874ZM51.126 44H54V41.126C52.5944 41.4878 51.4878 42.5944 51.126 44Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Money64;
