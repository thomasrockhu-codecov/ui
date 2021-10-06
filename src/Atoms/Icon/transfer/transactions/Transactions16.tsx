import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Transactions16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path
        d="M13.001 7h-2.828l2-2H1V3h11.173l-2-2H13L16 3.999V4L13.001 7zM2.999 9h2.828l-2 2H15v2H3.827l2 2H3L0 12.001V12L2.999 9z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Transactions16;
