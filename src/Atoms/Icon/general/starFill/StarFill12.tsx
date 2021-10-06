import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const StarFill12: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={12} height={12} fill="none" viewBox="0 0 16 16">
      <path
        d="M8 .4L10.769 5 16 6.213l-3.52 4.055.464 5.35L8 13.522l-4.944 2.095.464-5.35L0 6.212l5.231-1.211L8 .4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default StarFill12;
