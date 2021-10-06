import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Lock32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 10a5 5 0 0110 0h2a7 7 0 10-14 0h2zm19 19V11H2v18h28zM4 27V13h24v14H4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Lock32;
