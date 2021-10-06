import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const OtherIndustry24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1H1v10h10V1zM3 9V3h6v6H3zM11 13H1v10h10V13zm-8 8v-6h6v6H3zM13 1h10v10H13V1zm2 2v6h6V3h-6zM23 13H13v10h10V13zm-8 8v-6h6v6h-6z"
        fill={iconColor}
      />
    </svg>
  );
};

export default OtherIndustry24;
