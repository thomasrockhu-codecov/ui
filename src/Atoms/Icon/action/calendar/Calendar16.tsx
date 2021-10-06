import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Calendar16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1H5V0H3v1H0v15h16V1h-3V0h-2v1zM3 4V3H2v2h12V3h-1v1h-2V3H5v1H3zm11 3H2v7h12V7z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Calendar16;
