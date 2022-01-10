import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SustainableFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M29.9106 3.16349L30.0473 1.92328L28.8071 2.05996C23.4711 2.64803 19.1035 3.42053 15.7229 4.38641C12.3727 5.3436 9.86483 6.52485 8.37617 8.0135C4.31203 12.0776 4.08684 18.527 7.70062 22.8555L2.12256 28.4336L3.53677 29.8478L27.5766 5.80798C27.0509 9.78074 26.4108 13.0742 25.6611 15.6982C24.7294 18.9591 23.6622 21.0608 22.5428 22.1802C20.7269 23.9961 18.3311 24.8756 15.9499 24.8187L15.9021 26.8181C18.8074 26.8875 21.7386 25.8129 23.9571 23.5944C25.4457 22.1057 26.627 19.5978 27.5841 16.2477C28.55 12.8671 29.3225 8.4995 29.9106 3.16349Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SustainableFill32.displayName = 'Icon.SustainableFill';

export default SustainableFill32;
