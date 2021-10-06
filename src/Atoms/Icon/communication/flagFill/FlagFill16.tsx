import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const FlagFill16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M14.863 0l-2.571 4.5L14.863 9H3.14v7h-2V0h13.723z" fill={iconColor} />
    </svg>
  );
};

export default FlagFill16;
