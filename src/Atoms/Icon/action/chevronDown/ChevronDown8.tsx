import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronDown8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={8} fill="none">
      <path d="M0 .59l4 4 4-4v2.828l-4 4-4-4V.59z" fill={iconColor} />
    </svg>
  );
};

export default ChevronDown8;
