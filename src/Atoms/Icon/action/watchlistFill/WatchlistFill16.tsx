import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Watchlist16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8s-3 5-8 5-8-5-8-5 3-5 8-5 8 5 8 5zm-8 2a2 2 0 100-4 2 2 0 000 4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Watchlist16;
