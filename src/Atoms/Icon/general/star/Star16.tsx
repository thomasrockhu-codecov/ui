import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Star16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.769 5L8 .4 5.231 5 0 6.213l3.52 4.055-.464 5.35L8 13.522l4.944 2.095-.464-5.35L16 6.212l-5.231-1.211zm1.542 2.41l-2.819-.652L8 4.278l-1.492 2.48-2.82.653 1.898 2.185-.25 2.883L8 11.35l2.664 1.129-.25-2.883 1.897-2.185z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Star16;
