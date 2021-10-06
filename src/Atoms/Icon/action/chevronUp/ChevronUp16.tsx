import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronUp16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M16 13.42l-8-8-8 8v-2.828l8-8 8 8v2.828z" fill={iconColor} />
    </svg>
  );
};

export default ChevronUp16;
