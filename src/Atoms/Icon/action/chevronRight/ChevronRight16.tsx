import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronRight16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M2.58 16l8-8-8-8h2.828l8 8-8 8H2.58z" fill={iconColor} />
    </svg>
  );
};

export default ChevronRight16;
