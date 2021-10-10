import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Search48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6C11.8203 6 6 11.8203 6 19C6 26.1797 11.8203 32 19 32C22.2299 32 25.1847 30.8221 27.4582 28.8724L40.2132 41.6274L41.6274 40.2132L28.8724 27.4582C30.8221 25.1847 32 22.2299 32 19C32 11.8203 26.1797 6 19 6ZM8 19C8 12.9249 12.9249 8 19 8C25.0751 8 30 12.9249 30 19C30 25.0751 25.0751 30 19 30C12.9249 30 8 25.0751 8 19Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Search48;
