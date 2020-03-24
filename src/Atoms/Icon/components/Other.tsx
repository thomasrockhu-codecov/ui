import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Other = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3.5,9 C5.43299662,9 7,10.5670034 7,12.5 C7,14.4329966 5.43299662,16 3.5,16 C1.56700338,16 0,14.4329966 0,12.5 C0,10.5670034 1.56700338,9 3.5,9 Z M16,9 L16,16 L9,16 L9,9 L16,9 Z M3.5,10 C2.11928813,10 1,11.1192881 1,12.5 C1,13.8807119 2.11928813,15 3.5,15 C4.88071187,15 6,13.8807119 6,12.5 C6,11.1192881 4.88071187,10 3.5,10 Z M15,10 L10,10 L10,15 L15,15 L15,10 Z M12.5,0 C14.4329966,0 16,1.56700338 16,3.5 C16,5.43299662 14.4329966,7 12.5,7 C10.5670034,7 9,5.43299662 9,3.5 C9,1.56700338 10.5670034,0 12.5,0 Z M7,0 L7,7 L0,7 L0,0 L7,0 Z M12.5,1 C11.1192881,1 10,2.11928813 10,3.5 C10,4.88071187 11.1192881,6 12.5,6 C13.8807119,6 15,4.88071187 15,3.5 C15,2.11928813 13.8807119,1 12.5,1 Z M6,1 L1,1 L1,6 L6,6 L6,1 Z"
      />
    </IconBase>
  );
};

Other.displayName = 'Icon.Other';
