import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ErrorFill16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.686 0h6.628L16 4.686v6.628L11.314 16H4.686L0 11.314V4.686L4.686 0zM9 9V3H7v6h2zm0 4v-2H7v2h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ErrorFill16;
