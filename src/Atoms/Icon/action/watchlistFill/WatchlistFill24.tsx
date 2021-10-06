import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Watchlist24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20c7.418 0 12-8 12-8s-4.582-8-12-8-12 8-12 8 4.582 8 12 8zm0-5a3 3 0 100-6 3 3 0 000 6z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Watchlist24;
