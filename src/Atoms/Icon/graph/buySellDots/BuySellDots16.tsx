import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const BuySellDots16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M6 3.828l2 2V3L5 0 2 3v2.828l2-2v6.167h2V3.828zM10 12.167l-2-2v2.828l3 3 3-3v-2.828l-2 2V6h-2v6.167z"
        fill={iconColor}
      />
    </svg>
  );
};

export default BuySellDots16;
