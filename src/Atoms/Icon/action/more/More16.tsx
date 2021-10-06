import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const More16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M10 8a2 2 0 11-4 0 2 2 0 014 0zM4 8a2 2 0 11-4 0 2 2 0 014 0zM16 8a2 2 0 11-4 0 2 2 0 014 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default More16;
