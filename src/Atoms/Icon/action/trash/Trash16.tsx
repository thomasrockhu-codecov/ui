import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Trash16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M5.5 12V6h2v6h-2zM8.5 6v6h2V6h-2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.118 0H5.882l-1.25 2.5H1v2h1V13a3 3 0 003 3h6a3 3 0 003-3V4.5h1v-2h-3.632L10.118 0zm-.986 2.5l-.25-.5H7.118l-.25.5h2.264zM4 4.5h8V13a1 1 0 01-1 1H5a1 1 0 01-1-1V4.5z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Trash16;
