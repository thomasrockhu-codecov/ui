import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const GrowthStock16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M10.644 15.526l2.832-10.57 1.448 2.507.732-2.732L13.5 1 9.884 3.088l-.732 2.733 2.392-1.381-2.97 11.086h2.07zM4.482 15.526l2.143-8h2.07l-2.143 8h-2.07zM2.411 15.526H.34l1.608-6h2.07l-1.607 6z"
        fill={iconColor}
      />
    </svg>
  );
};

export default GrowthStock16;
