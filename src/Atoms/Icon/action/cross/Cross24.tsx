import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Cross24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M12.01 13.425l8.486 8.485 1.414-1.414-8.486-8.486 8.465-8.506-1.414-1.414-8.465 8.506-8.485-8.485-1.414 1.414 8.485 8.485-8.506 8.465 1.414 1.414 8.506-8.464z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Cross24;
