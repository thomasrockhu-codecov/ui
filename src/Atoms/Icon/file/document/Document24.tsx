import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Document24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d="M11 10H7V8h4v2zM7 18h10v-2H7v2zM17 14H7v-2h10v2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.414 1H3v22h18V5.586L16.414 1zM5 21V3h10.586L19 6.414V21H5z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Document24;
