import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RecommendedFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M16 31C24.2843 31 31 24.2843 31 16C31 11.8082 29.2806 8.01805 26.5086 5.29626L16.3629 24H13.9333L9.1333 15H11.4L15.1527 22.0364L23.9901 5.7445L24.9649 3.97263C22.464 2.10546 19.3611 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default RecommendedFill32;
