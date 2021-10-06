import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronRight8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={9} fill="none">
      <path d="M.586 8.014l4-4-4-4h2.828l4 4-4 4H.586z" fill={iconColor} />
    </svg>
  );
};

export default ChevronRight8;
