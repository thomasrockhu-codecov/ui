import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Add8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={8} fill="none">
      <path d="M3 5v3h2V5h3V3H5V0H3v3H0v2h3z" fill={iconColor} />
    </svg>
  );
};

export default Add8;
