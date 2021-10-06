import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Filter16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4H0V2h16v2zM14 9H2V7h12v2zM12 14H4v-2h8v2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Filter16;
