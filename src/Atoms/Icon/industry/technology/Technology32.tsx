import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Technology32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 1a3.5 3.5 0 00-1 6.855v4.73l-4 4V31h2V17.414l4-4V7.855A3.502 3.502 0 0028 1zm-1.5 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11 4a3.5 3.5 0 00-1 6.855v5.56l4 4V31h2V19.586l-4-4v-4.73A3.502 3.502 0 0011 4zM9.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 12a3.5 3.5 0 101.326 6.74L9 22.414V31h2v-9.414l-4.11-4.11A3.5 3.5 0 004 12zm-1.5 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 11.5a3.5 3.5 0 114.5 3.355V31h-2V14.855a3.502 3.502 0 01-2.5-3.355zM20 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Technology32;
