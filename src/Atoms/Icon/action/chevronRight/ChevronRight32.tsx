import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronRight32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path d="M9.914 31.004H7.086l15-15-15-15h2.828l15 15-15 15z" fill={iconColor} />
    </svg>
  );
};

export default ChevronRight32;
