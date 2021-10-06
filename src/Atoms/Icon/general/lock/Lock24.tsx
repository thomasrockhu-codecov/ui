import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Lock24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M9 7a3 3 0 116 0h2A5 5 0 007 7h2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 22V8h20v14H2zm2-2V10h16v10H4z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Lock24;
