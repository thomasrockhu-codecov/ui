import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Consumer24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.256 6H1V4h3.744l3 10h10.512l2.4-8H8V4h15.344l-3.6 12H6.256l-3-10zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Consumer24;
