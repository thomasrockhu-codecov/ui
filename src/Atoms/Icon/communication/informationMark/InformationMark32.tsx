import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const InformationMark32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30V8h2v22h-2zM15 5V2h2v3h-2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default InformationMark32;
