import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ValueStock16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.404.5h9.193l3.317 6.143L8 15.5.087 6.643 3.404.5zm.759 2.804L2.977 5.5H5.92L4.163 3.304zM6.08 2.5L8 4.899 9.92 2.5H6.08zm5.757.803L10.08 5.5h2.944l-1.186-2.197zM7 7.5v3.88L3.535 7.5H7zm2 3.88V7.5h3.466L9 11.38z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ValueStock16;
