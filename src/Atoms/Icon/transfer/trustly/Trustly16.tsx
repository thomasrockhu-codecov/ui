import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Trustly16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2v4.91h-4.819V14H5.274v-2.727L8.545 8 5.273 4.727V6.91H1V2h14z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Trustly16;
