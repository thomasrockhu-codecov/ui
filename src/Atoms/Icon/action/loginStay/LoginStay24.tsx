import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Add24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M8 3v1H6V1h13a3 3 0 013 3v16a3 3 0 01-3 3H6v-3h2v1h11a1 1 0 001-1V4a1 1 0 00-1-1H8z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 18.5v-8h12v8H2zm2-6v4h8v-4H4z"
        fill={iconColor}
      />
      <path d="M8 7.5a2 2 0 00-2 2H4a4 4 0 118 0h-2a2 2 0 00-2-2z" fill={iconColor} />
    </svg>
  );
};

export default Add24;
