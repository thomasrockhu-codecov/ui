import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SustainableFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M22.3978 1.56L22.2611 2.8002C21.832 6.69447 21.2672 9.89217 20.5579 12.3748C19.8573 14.827 18.9814 16.7087 17.847 17.8431C16.1765 19.5136 13.969 20.3228 11.7817 20.2706L11.8295 18.2712C13.4926 18.3109 15.1649 17.6968 16.4328 16.4289C17.1979 15.6638 17.9597 14.1883 18.6348 11.8253C19.1254 10.1084 19.5524 7.98901 19.9122 5.45982L2.97427 22.3978L1.56006 20.9836L5.44977 17.0938C2.89258 13.8383 3.11422 9.11127 6.1147 6.1108C7.2491 4.97639 9.13087 4.10056 11.5831 3.39994C14.0657 2.69062 17.2634 2.12586 21.1576 1.69668L22.3978 1.56Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SustainableFill24.displayName = 'Icon.SustainableFill';

export default SustainableFill24;
