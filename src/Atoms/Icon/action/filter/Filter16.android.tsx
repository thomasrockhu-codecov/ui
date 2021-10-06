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
        d="M.131 0h15.737L11 7.303v5.315l-6 3V7.303L.131 0zm3.737 2L7 6.697v5.685l2-1V6.697L12.132 2H3.868z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Filter16;
