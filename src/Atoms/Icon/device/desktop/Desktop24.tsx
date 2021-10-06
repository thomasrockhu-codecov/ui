import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Desktop24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 16V4h18v12H3zM5 6h14v8H5V6z"
        fill={iconColor}
      />
      <path d="M1 20h22v-2H1v2z" fill={iconColor} />
    </svg>
  );
};

export default Desktop24;
