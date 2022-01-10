import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const HelpFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.46802 9.61801H6.89602L6.89602 9.41447C6.89591 8.61476 6.89585 8.24038 8.10802 7.254C8.14692 7.22218 8.18524 7.19107 8.22284 7.16053C8.69563 6.77663 9.05602 6.48399 9.05602 6.006C9.05602 5.55 8.73202 5.19 8.08402 5.19C7.41202 5.19 7.04002 5.61001 6.88402 6.11401H5.07202C5.31202 4.48201 6.53602 3.63 8.12002 3.63C9.78802 3.63 10.928 4.518 10.928 5.92201C10.928 6.85801 10.532 7.35001 9.46402 8.262C9.44921 8.27434 9.43453 8.28657 9.41997 8.29869C8.9391 8.69908 8.5972 8.98376 8.50402 9.43801L8.46802 9.61801ZM6.76402 10.458H8.64802V12.366H6.76402V10.458Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

HelpFill16.displayName = 'Icon.HelpFill';

export default HelpFill16;
