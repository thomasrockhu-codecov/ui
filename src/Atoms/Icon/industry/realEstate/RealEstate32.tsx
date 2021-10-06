import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const RealEstate32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 .683L31 13.54V31h-2V14.46L16 3.317 3 14.46V29h8V19h10v12h-2V21h-6v10H1V13.54L16 .683z"
        fill={iconColor}
      />
    </svg>
  );
};

export default RealEstate32;
