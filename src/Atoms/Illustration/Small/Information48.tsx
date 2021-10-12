import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Information48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path d="M25 19V34H23V19H25Z" fill="currentColor" />
      <path d="M25 16V14H23V16H25Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Information48;
