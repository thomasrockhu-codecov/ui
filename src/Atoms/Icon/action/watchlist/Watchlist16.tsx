import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Watchlist16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8s3 5 8 5 8-5 8-5-3-5-8-5-8 5-8 5zm2.486 0c.267-.315.597-.668.984-1.02C4.652 5.905 6.192 5 8 5c1.808 0 3.348.905 4.53 1.98.386.352.716.705.984 1.02-.268.315-.598.668-.984 1.02C11.348 10.095 9.808 11 8 11c-1.808 0-3.348-.905-4.53-1.98A11.09 11.09 0 012.486 8z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Watchlist16;
