import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Recommended24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M3 12C3 7.02944 7.02944 3 12 3C14.1888 3 16.1946 3.78054 17.7552 5.08026L11.6287 16.0205L8.92532 11H6.65381L10.423 18H12.8124L20.2446 4.72823L20.2497 4.72371L20.2482 4.72191L20.2493 4.71993L20.2461 4.71956C18.232 2.43996 15.2836 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Recommended24.displayName = 'Icon.Recommended';

export default Recommended24;
