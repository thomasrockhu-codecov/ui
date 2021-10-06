import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Hide16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3L3 14l-1.414-1.414L2.97 11.2C1.061 9.768 0 8 0 8s3-5 8-5c.97 0 1.866.189 2.68.492l1.906-1.906L14 3zM9.066 5.106l-.901.9a2 2 0 00-2.158 2.158L4.403 9.77a9.467 9.467 0 01-.933-.749A11.09 11.09 0 012.486 8c.267-.315.597-.668.984-1.02C4.652 5.905 6.192 5 8 5c.367 0 .722.037 1.066.106z"
        fill={iconColor}
      />
      <path
        d="M12.258 6.742A11.102 11.102 0 0113.514 8c-.268.315-.598.668-.984 1.02C11.348 10.095 9.808 11 8 11l-1.784 1.784A7.49 7.49 0 008 13c5 0 8-5 8-5s-.822-1.37-2.323-2.677l-1.419 1.419z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Hide16;
