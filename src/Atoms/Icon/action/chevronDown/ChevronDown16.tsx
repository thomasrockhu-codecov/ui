import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronDown16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M0 2.58l8 8 8-8v2.828l-8 8-8-8V2.58z" fill={iconColor} />
    </svg>
  );
};

export default ChevronDown16;
