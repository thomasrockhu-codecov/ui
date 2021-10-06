import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Healthcare16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M5.414 3.585l1.414-1.413A3.987 3.987 0 004.043 1H4l-.156.003a4.002 4.002 0 00-2.708 6.79c.25.256 1.763 1.954 3.246 3.627l1.985 2.242L8 15.512l1.633-1.85c.534-.604 1.25-1.414 1.985-2.242 1.483-1.673 2.995-3.37 3.246-3.628A4 4 0 108 5h2a2 2 0 113.432 1.396c-.295.302-1.857 2.057-3.31 3.697-.736.829-1.454 1.64-1.988 2.244L8 12.49l-.134-.152c-.534-.604-1.251-1.416-1.986-2.245l-.002.001c-1.454-1.64-3.016-3.395-3.31-3.697a2 2 0 012.846-2.81z"
        fill={iconColor}
      />
      <path d="M7 10V9H6V7h1V6h2v1h1v2H9v1H7z" fill={iconColor} />
    </IconBase>
  );
};

export default Healthcare16;
