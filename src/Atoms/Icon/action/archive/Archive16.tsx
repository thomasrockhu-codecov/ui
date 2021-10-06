import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Archive16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V6H16V0H0ZM14 2H2V4H14V2Z"
        fill={iconColor}
      />
      <path d="M3 14V6H1V16H15V6H13V14H3Z" fill={iconColor} />
      <path d="M5 10H11V8H5V10Z" fill={iconColor} />
    </svg>
  );
};

export default Archive16;
