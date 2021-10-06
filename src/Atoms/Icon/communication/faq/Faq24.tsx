import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Faq24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M10.39 9.85H9.08v-.17c0-.666 0-.978 1.01-1.8l.096-.078c.394-.32.694-.564.694-.962 0-.38-.27-.68-.81-.68-.56 0-.87.35-1 .77H7.56c.2-1.36 1.22-2.07 2.54-2.07 1.39 0 2.34.74 2.34 1.91 0 .78-.33 1.19-1.22 1.95l-.037.03c-.4.334-.685.571-.763.95l-.03.15zM8.97 10.55h1.57v1.59H8.97v-1.59z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2h18v4h4v17l-5.333-4H5v-3l-4 3V2zm18 13V8h2v11l-2.667-2H7v-2h12zM3 4v11l2.667-2H17V4H3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Faq24;
