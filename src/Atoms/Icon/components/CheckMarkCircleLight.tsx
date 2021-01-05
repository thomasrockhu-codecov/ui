import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CheckMarkCircleLight = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <path d="M12,1.25 C17.9370611,1.25 22.75,6.06293894 22.75,12 C22.75,17.9370611 17.9370611,22.75 12,22.75 C6.06293894,22.75 1.25,17.9370611 1.25,12 C1.25,6.06293894 6.06293894,1.25 12,1.25 Z M12,2.75 C6.89136606,2.75 2.75,6.89136606 2.75,12 C2.75,17.1086339 6.89136606,21.25 12,21.25 C17.1086339,21.25 21.25,17.1086339 21.25,12 C21.25,6.89136606 17.1086339,2.75 12,2.75 Z M17.1265242,8.05545635 L18.1871843,9.11611652 L10.5857864,16.7175144 L5.81281566,11.9445436 L6.87347584,10.8838835 L10.586,14.596 L17.1265242,8.05545635 Z"></path>
    </IconBase>
  );
};

CheckMarkCircleLight.displayName = 'Icon.CheckMarkCircleLight';
