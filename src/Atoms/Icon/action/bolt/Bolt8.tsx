import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Bolt8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={8} fill="none">
      <path d="M5.167 0L.5 4.5h2.917L2.833 8 7.5 3.5H4.583L5.167 0z" fill={iconColor} />
    </svg>
  );
};

export default Bolt8;
