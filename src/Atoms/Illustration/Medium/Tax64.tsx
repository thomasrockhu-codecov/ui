import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Tax64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M20 40H39V38H20V40Z" fill="currentColor" />
      <path d="M20 45H32V43H20V45Z" fill="currentColor" />
      <path d="M20.461 32L35.8419 15H38.539L23.1581 32H20.461Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.4896 32C33.5614 31.9944 32 30.4295 32 28.5C32 26.567 33.567 25 35.5 25C37.4291 25 38.9937 26.5607 39 28.4883V28.5117C38.9937 30.4358 37.4347 31.9944 35.5104 32H35.4896ZM34 28.5C34 27.6716 34.6716 27 35.5 27C36.3284 27 37 27.6716 37 28.5C37 29.3284 36.3284 30 35.5 30C34.6716 30 34 29.3284 34 28.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 18.5C20 16.567 21.567 15 23.5 15C25.433 15 27 16.567 27 18.5C27 20.433 25.433 22 23.5 22C21.567 22 20 20.433 20 18.5ZM23.5 17C22.6716 17 22 17.6716 22 18.5C22 19.3284 22.6716 20 23.5 20C24.3284 20 25 19.3284 25 18.5C25 17.6716 24.3284 17 23.5 17Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 8H13V52H17V57H51V12H46V8ZM19 55V52H46V14H49V55H19ZM15 50V10H44V50H15Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Tax64;
