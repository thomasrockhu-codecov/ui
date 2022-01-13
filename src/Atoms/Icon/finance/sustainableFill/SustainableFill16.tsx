import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SustainableFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M15.2914 1.81021L15.4281 0.570007L14.1879 0.706688C11.51 1.00181 9.29938 1.39131 7.57442 1.88416C5.87988 2.36831 4.52638 2.98647 3.69085 3.82199C1.58858 5.92427 1.37247 9.19845 3.04252 11.5417L0.569824 14.0144L1.98404 15.4286L12.9138 4.49878C12.7013 5.80972 12.4597 6.93356 12.1909 7.87426C11.7323 9.47955 11.2281 10.4268 10.7619 10.8931C9.95635 11.6986 8.89456 12.0887 7.83727 12.0635L7.78953 14.0629C9.37092 14.1007 10.968 13.5154 12.1761 12.3073C13.0117 11.4717 13.6298 10.1182 14.114 8.4237C14.6068 6.69875 14.9963 4.48808 15.2914 1.81021Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SustainableFill16.displayName = 'Icon.SustainableFill';

export default SustainableFill16;
