import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Book32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M12 11H4V9h8v2zM12 16H4v-2h8v2zM8 21H4v-2h4v2zM20 11h8V9h-8v2zM20 16h8v-2h-8v2zM20 21h4v-2h-4v2z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4H0v23h13a2 2 0 012 2h2a2 2 0 012-2h13V4H19a3.99 3.99 0 00-3 1.354A3.99 3.99 0 0013 4zm2 4a2 2 0 00-2-2H2v19h11c.729 0 1.412.195 2 .535V8zm2 17.535A3.982 3.982 0 0119 25h11V6H19a2 2 0 00-2 2v17.535z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Book32;
