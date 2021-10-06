import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowRight32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M17.172 5l10 10H1v2h26.176l-10 10h2.828L31 16.004V16L20 5h-2.828z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ArrowRight32;
