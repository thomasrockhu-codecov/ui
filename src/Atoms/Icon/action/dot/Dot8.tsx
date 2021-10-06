import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Dot8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={8} fill="none">
      <circle cx={4} cy={4} r={4} fill={iconColor} />
    </svg>
  );
};

export default Dot8;
