import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Grid16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16v-4H0v-2h4V6H0V4h4V0h2v4h4V0h2v4h4v2h-4v4h4v2h-4v4h-2v-4H6v4H4zm6-6V6H6v4h4z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Grid16;
