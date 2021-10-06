import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ExternalLink8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={8} fill="none">
      <path d="M4.586 2H1l2-2h5v5L6 7V3.414L1.414 8 0 6.586 4.586 2z" fill={iconColor} />
    </svg>
  );
};

export default ExternalLink8;
