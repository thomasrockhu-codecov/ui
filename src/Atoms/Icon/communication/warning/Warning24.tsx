import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Warning24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M13.0015 7V15H11.0015V7H13.0015Z" fill="currentColor" />
      <path d="M13.0015 17V19H11.0015V17H13.0015Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6543 2.53158C13.4753 0.489474 10.5277 0.489472 9.34871 2.53158L0.414956 18.0053C-0.764056 20.0474 0.709708 22.6001 3.06773 22.6001H20.9353C23.2933 22.6001 24.767 20.0474 23.588 18.0053L14.6543 2.53158ZM11.0808 3.53158C11.49 2.82281 12.513 2.82281 12.9222 3.53158L21.856 19.0053C22.2652 19.7141 21.7537 20.6001 20.9353 20.6001H3.06773C2.24931 20.6001 1.73779 19.7141 2.14701 19.0053L11.0808 3.53158Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Warning24;
