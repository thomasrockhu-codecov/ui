import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Account32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <path d="M25 20h2v-2h-2v2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5a4 4 0 014-4h22v6h4v24H5a4 4 0 01-4-4V5zm4-2h20v4H5a2 2 0 110-4zm0 6h24v20H5a2 2 0 01-2-2V8.465C3.588 8.805 4.271 9 5 9z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Account32;
