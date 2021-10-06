import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Pharmaceutical16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M7 8v1H6v2h1v1h2v-1h1V9H9V8H7z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2a2 2 0 012-2h6a2 2 0 012 2v1a2 2 0 01-1 1.732v.854l1.121 1.121A3 3 0 0114 8.828V13a3 3 0 01-3 3H5a3 3 0 01-3-3V8.828a3 3 0 01.879-2.12L4 5.585v-.854A2 2 0 013 3V2zm2 1h2V2H5v1zm4 0h2V2H9v1zM6 5v1.414L4.293 8.121A1 1 0 004 8.828V13a1 1 0 001 1h6a1 1 0 001-1V8.828a1 1 0 00-.293-.707L10 6.414V5H6z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Pharmaceutical16;
