import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Error16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M1 5.1L5.1 1h5.8L15 5.1v5.8L10.9 15H5.1L1 10.9V5.1z"
        stroke={iconColor}
        strokeWidth={2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4v5H7V4h2zM9 10v2H7v-2h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Error16;
