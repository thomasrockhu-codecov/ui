import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Lightbulb32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <g fill="currentColor">
        <path d="M15 1V5H17V1H15Z" />
        <path d="M12 27V25H20V27H12Z" />
        <path d="M6 5L8.82843 7.82843L10.2426 6.41421L7.41421 3.58578L6 5Z" />
        <path d="M24.5858 3.58579L21.7574 6.41421L23.1716 7.82843L26 5L24.5858 3.58579Z" />
        <path d="M12 28V30H20V28H12Z" />
        <path d="M16 9C12.6863 9 10 11.6863 10 15C10 17.392 11.3997 19.459 13.4291 20.4231L14 20.6943V24H12V21.9295C9.61038 20.5473 8 17.9626 8 15C8 10.5817 11.5817 7 16 7C20.4183 7 24 10.5817 24 15C24 17.9626 22.3896 20.5473 20 21.9295V24H18V20.6943L18.5709 20.4231C20.6003 19.459 22 17.392 22 15C22 11.6863 19.3137 9 16 9Z" />
        <path d="M16 13C17.1046 13 18 13.8954 18 15H20C20 12.7909 18.2091 11 16 11V13Z" />
      </g>
    </IconBase>
  );
};

export default Lightbulb32;
