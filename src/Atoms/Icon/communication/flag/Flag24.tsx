import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Flag24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 1l-4.375 6L21 13H5v10H3V1h18zM5 3h12.066L14.15 7l2.916 4H5V3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Flag24;
