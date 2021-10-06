import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Industrial32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M4.556 4.832C6.426 3.586 8.236 3 10 3c1.766 0 3.575.586 5.444 1.832C17.576 6.252 19.767 7 22 7s4.424-.748 6.555-2.168l-1.11-1.664C25.576 4.414 23.766 5 22.001 5c-1.766 0-3.577-.586-5.447-1.832C14.424 1.748 12.235 1 10.001 1s-4.424.748-6.555 2.168l1.11 1.664zM5 8v21h22v-9.131l-6 4v-3.997l-5.972 3.994-.019-4.003L9 23.869V8h2v12.131l5.991-3.994.02 3.997 5.987-4.006.001 4.004 6.001-4V31H3V8h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Industrial32;
