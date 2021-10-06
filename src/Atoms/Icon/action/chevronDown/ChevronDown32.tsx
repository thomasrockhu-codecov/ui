import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronDown32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path d="M1 9.918V7.09l15 15 15-15v2.828l-15 15-15-15z" fill={iconColor} />
    </svg>
  );
};

export default ChevronDown32;
