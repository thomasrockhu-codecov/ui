import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Healthcare32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M8.463 5A5.462 5.462 0 003 10.461c0 1.492.6 2.324 1.85 4.053l.153.213c.807 1.118 4.467 5.68 10.997 12.796 6.53-7.116 10.19-11.678 10.997-12.796l.153-.213c1.25-1.73 1.85-2.561 1.85-4.053a5.462 5.462 0 00-10.923 0h-2a7.461 7.461 0 1114.923 0c0 2.157-.972 3.495-2.127 5.085l-.254.35c-.907 1.259-4.875 6.19-11.884 13.782l-.735.796-.735-.796C8.257 22.085 4.29 17.155 3.382 15.897l-.254-.351C1.973 13.956 1 12.618 1 10.46A7.462 7.462 0 0113.536 4.99l-1.36 1.466A5.439 5.439 0 008.463 5z"
        fill="currentColor"
      />
      <path d="M13.001 17v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2z" fill="currentColor" />
    </IconBase>
  );
};

export default Healthcare32;
