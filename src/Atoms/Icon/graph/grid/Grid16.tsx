import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Grid16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16v-4H0v-2h4V6H0V4h4V0h2v4h4V0h2v4h4v2h-4v4h4v2h-4v4h-2v-4H6v4H4zm6-6V6H6v4h4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Grid16;
