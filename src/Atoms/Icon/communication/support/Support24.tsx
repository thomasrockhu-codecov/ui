import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Support24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.062 8a8.001 8.001 0 0115.876 0H20a3 3 0 013 3v2a3 3 0 01-3 3v2a3 3 0 01-3 3h-3.208a2.5 2.5 0 110-2H17a1 1 0 001-1V9A6 6 0 006 9v7H4a3 3 0 01-3-3v-2a3 3 0 013-3h.062zM4 10a1 1 0 00-1 1v2a1 1 0 001 1v-4zm16 0v4a1 1 0 001-1v-2a1 1 0 00-1-1zm-8.5 9.5a.5.5 0 100 1 .5.5 0 000-1z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Support24;
