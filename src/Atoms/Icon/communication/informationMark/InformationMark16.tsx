import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const InformationMark16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15V5h2v10H7zM7 3V1h2v2H7z"
        fill={iconColor}
      />
    </svg>
  );
};

export default InformationMark16;
