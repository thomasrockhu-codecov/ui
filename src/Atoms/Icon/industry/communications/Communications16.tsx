import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Communications16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M5.5 5h-2v2h2V5z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.1 12H0V6a6 6 0 1112 .1c2.282.463 4 2.48 4 4.9v5h-5a5.002 5.002 0 01-4.9-4zm3.899-5.9L10 6a4 4 0 10-8 0v4h4l.1-.001A5 5 0 018 7H6.5V5h2v1.669c.459-.265.963-.46 1.499-.569zM10.5 10h-2v2h2v-2zm1 0h2v2h-2v-2z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Communications16;
