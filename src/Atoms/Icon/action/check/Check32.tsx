import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Check32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.057 24.132l-9.193-9.193L.45 16.355 11.057 26.96 31.563 6.454 30.148 5.04 11.057 24.132z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Check32;
