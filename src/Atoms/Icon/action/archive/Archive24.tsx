import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Archive24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1v7h22V1H1zm20 2H3v3h18V3z"
        fill={iconColor}
      />
      <path d="M4 21V8H2v15h20V8h-2v13H4z" fill={iconColor} />
      <path d="M8 13.5h8v-2H8v2z" fill={iconColor} />
    </IconBase>
  );
};

export default Archive24;
