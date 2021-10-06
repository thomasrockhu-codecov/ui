import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const PriceAlert16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.083c2.838.476 5 2.944 5 5.917v3.586l1 1V14h-5a2 2 0 11-4 0H1v-2.414l1-1V7a6.002 6.002 0 015-5.917V0h2v1.083zM8 3a4 4 0 00-4 4v4.414L3.414 12h9.172L12 11.414V7a4 4 0 00-4-4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default PriceAlert16;
