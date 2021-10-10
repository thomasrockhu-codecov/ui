import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const PriceAlert48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        d="M30 17C30 14.7909 28.2091 13 26 13V11C29.3137 11 32 13.6863 32 17H30Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.919 5.30475C26.6054 3.98314 25.4175 3 24 3C22.5825 3 21.3946 3.98314 21.081 5.30475C14.7501 6.64752 10 12.269 10 19V26.7639L7 32.7639V40H19.1C19.5633 42.2822 21.581 44 24 44C26.419 44 28.4367 42.2822 28.9 40H41V32.7639L38 26.7639V19C38 12.269 33.2499 6.64752 26.919 5.30475ZM21.1707 40C21.5825 41.1652 22.6938 42 24 42C25.3062 42 26.4175 41.1652 26.8293 40H21.1707ZM12 19C12 12.3726 17.3726 7 24 7C30.6274 7 36 12.3726 36 19V27.2361L39 33.2361V38H9V33.2361L12 27.2361V19Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default PriceAlert48;
