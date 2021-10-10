import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Gold64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M33 18V10H31V18H33Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2792 22H39.7207L43.7207 34H53.7207L58.3874 48H5.61255L10.2792 34H18.2792L22.2792 22ZM38.2792 24L41.6125 34H20.3874L23.7207 24H38.2792ZM32 46.8377L28.3874 36H35.6126L32 46.8377ZM26.2792 36L29.6126 46H8.3874L11.7207 36H26.2792ZM34.3874 46L37.7207 36H52.2792L55.6125 46H34.3874Z"
        fill="currentColor"
      />
      <path
        d="M47.9968 14.1716L42.34 19.8285L40.9258 18.4142L46.5826 12.7574L47.9968 14.1716Z"
        fill="currentColor"
      />
      <path
        d="M16 14.1716L21.6568 19.8285L23.071 18.4142L17.4142 12.7574L16 14.1716Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Gold64;
