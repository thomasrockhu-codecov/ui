import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Profile32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2a7 7 0 100 14 7 7 0 000-14zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z"
        fill="currentColor"
      />
      <path
        d="M6 18a4 4 0 00-4 4v7h2v-7a2 2 0 012-2h20a2 2 0 012 2v7h2v-7a4 4 0 00-4-4H6z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Profile32.displayName = 'Icon.Profile';

export default Profile32;
