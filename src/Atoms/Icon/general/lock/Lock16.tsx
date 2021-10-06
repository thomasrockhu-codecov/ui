import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Lock16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M5 5a3 3 0 016 0h2A5 5 0 003 5h2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6v10h16V6H0zm2 8V8h12v6H2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Lock16;
