import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const SubtractCircle24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M19 11H5v2h14v-2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 11-18 0 9 9 0 0118 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default SubtractCircle24;
