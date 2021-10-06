import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Check16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.85 3.657l-9.9 9.9L.293 7.898l1.414-1.414 4.243 4.243 8.485-8.485 1.414 1.414z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Check16;
