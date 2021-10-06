import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Bolt24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={26} fill="none">
      <path d="M15 4L5 15h5l-1 7 10-11h-5l1-7z" stroke={iconColor} strokeWidth={2} />
    </svg>
  );
};

export default Bolt24;
