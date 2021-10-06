import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Transportation16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.146 2H0V0h10.146a3 3 0 012.785 1.886l2.4 6C16.12 9.856 14.668 12 12.546 12H0v-2h12.546c.575 0 1.002-.471 1.001-1H8a2 2 0 01-2-2V5a2 2 0 012-2h3.223l-.149-.371A1 1 0 0010.146 2zm1.877 3H8v2h4.823l-.8-2z"
        fill={iconColor}
      />
      <path d="M1 15H0v-2h16v2h-1v1h-2v-1h-2v1H9v-1H7v1H5v-1H3v1H1v-1z" fill={iconColor} />
    </svg>
  );
};

export default Transportation16;
