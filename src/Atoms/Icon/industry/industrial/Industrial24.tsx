import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Industrial24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 21V6.5H2V23h20V11.132l-4.5 3-.002-3.004-4.493 3.006-.014-2.997L8.5 14.133V6.5h-2v11.369l4.509-3.006.015 3.003 4.476-2.994v2.996l4.5-3V21H4zM7.5 3c-1.266 0-2.576.42-3.945 1.332l-1.11-1.664C4.075 1.58 5.765 1 7.5 1c1.734 0 3.424.58 5.053 1.668C13.923 3.58 15.234 4 16.5 4s2.576-.42 3.945-1.332l1.11 1.664C19.925 5.419 18.235 6 16.5 6c-1.734 0-3.424-.58-5.056-1.668C10.076 3.42 8.766 3 7.5 3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Industrial24;
