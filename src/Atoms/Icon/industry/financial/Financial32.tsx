import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Financial32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M16 2.912l15.313 6.563-.788 1.838L16 5.088 1.474 11.313.687 9.475 16 2.912zM30 30H2v-2h28v2zM8 26V12H6v14h2zM16.81 12v14h-2V12h2zM25.621 26V12h-2v14h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Financial32;
