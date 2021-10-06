import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const SubtractCircle16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M4 9V7h8v2H4z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-2 0A6 6 0 112 8a6 6 0 0112 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default SubtractCircle16;
