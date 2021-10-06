import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ValueStock24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.379 2H4.621L0 9.096 12 22.5 24 9.096 19.379 2zM3.099 8l1.94-2.977L6.491 8H3.1zm6.334-4L8.098 6.733 6.763 4h2.67zm.251 4l1.954-4h.715l1.954 4H9.684zm7.813 0H20.9l-1.944-2.986L17.497 8zm-1.585-1.268L17.246 4h-2.668l1.334 2.732zM9.585 16.804L7.37 10H3.493l6.092 6.804zM9.466 10l2.537 7.792L14.54 10H9.466zm11.041 0l-6.103 6.817L16.624 10h3.883z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ValueStock24;
