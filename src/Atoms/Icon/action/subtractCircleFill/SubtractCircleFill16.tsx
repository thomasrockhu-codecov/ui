import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const SubtractCircleFill16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM4 9V7h8v2H4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default SubtractCircleFill16;
