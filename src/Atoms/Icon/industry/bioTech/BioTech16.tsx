import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const BioTech16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.73 4.066c-.066-1.269.092-2.71 1.287-4.016l1.417 1.416c-.7.805-.773 1.667-.683 2.793 1.125.09 1.987.016 2.792-.683l1.416 1.416c-1.306 1.196-2.747 1.353-4.016 1.287.07 1.328-.106 2.843-1.46 4.197-1.353 1.353-2.869 1.529-4.197 1.46.066 1.271-.092 2.715-1.294 4.024l-1.416-1.417c.706-.807.78-1.67.69-2.8-1.129-.09-1.993-.015-2.8.69L.05 11.017c1.308-1.202 2.752-1.36 4.024-1.294-.07-1.328.106-2.843 1.46-4.197 1.353-1.353 2.868-1.529 4.196-1.46zm-1.963 2.28c.63-.303 1.32-.326 2.156-.26.066.836.043 1.526-.26 2.156L7.767 6.346zM6.353 7.76c-.302.63-.326 1.32-.26 2.156.836.066 1.527.043 2.156-.26L6.353 7.76z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default BioTech16;
