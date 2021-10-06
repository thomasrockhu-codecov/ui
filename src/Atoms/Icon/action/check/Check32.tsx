import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.057 24.132l-9.193-9.193L.45 16.355 11.057 26.96 31.563 6.454 30.148 5.04 11.057 24.132z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Check32;
