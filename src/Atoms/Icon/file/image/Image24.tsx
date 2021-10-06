import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const FactSheet24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M17 7h-4V5h4v2zM17 19H7v-2h10v2zM17 15H7v-2h10v2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1h18v22H3V1zm2 20h14V3H5v18z"
        fill={iconColor}
      />
    </svg>
  );
};

export default FactSheet24;
