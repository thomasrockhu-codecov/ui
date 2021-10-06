import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Refresh16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M7.733 2.006L5.727 0h2.828l3.001 3.001L8.557 6H5.73l1.99-1.99A4 4 0 1012 8h2a6 6 0 11-6.267-5.994z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Refresh16;
