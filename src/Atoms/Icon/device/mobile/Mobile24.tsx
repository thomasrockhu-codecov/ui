import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Mobile24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1v22h14V1H5zm5 2H7v13h10V3h-3v1h-4V3zM7 21v-3h10v3H7z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Mobile24;
