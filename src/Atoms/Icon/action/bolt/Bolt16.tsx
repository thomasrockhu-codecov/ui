import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Bolt16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M9.833 2L2.5 8.75h4.583L6.167 14 13.5 7.25H8.917L9.833 2z" fill={iconColor} />
    </svg>
  );
};

export default Bolt16;
