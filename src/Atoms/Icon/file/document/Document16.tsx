import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Document16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path d="M11 8H5V6h6v2zM5 12h6v-2H5v2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.414 0H1v16h14V3.586L11.414 0zM3 14V2h7.586L13 4.414V14H3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Document16;
