import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Apartment32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M22 1H1v31h2V3h17v29h2V17h7v15h2V15h-9V1Z" fill="currentColor" />
      <path
        d="M8 29a4 4 0 0 1 8 0v3h-2v-3a2 2 0 1 0-4 0v3H8v-3Zm0-9H5v3h3v-3Zm-3-5h3v3H5v-3Zm3-5H5v3h3v-3ZM5 5h3v3H5V5Zm8 15h-3v3h3v-3Zm-3-5h3v3h-3v-3Zm3-5h-3v3h3v-3Zm-3-5h3v3h-3V5Zm8 15h-3v3h3v-3Zm6 9h3v3h-3v-3Zm-6-14h-3v3h3v-3Zm6 9h3v3h-3v-3Zm-6-14h-3v3h3v-3Zm6 9h3v3h-3v-3ZM18 5h-3v3h3V5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Apartment32.displayName = 'Icon.Apartment';

export default Apartment32;
