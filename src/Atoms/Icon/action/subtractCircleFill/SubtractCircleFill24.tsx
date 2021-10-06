import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const SubtractCircleFill24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm8-12H4v2h16v-2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default SubtractCircleFill24;
