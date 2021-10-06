import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Technology24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 1a3 3 0 00-1 5.83v3.756l-2 2V23h2v-9.586l2-2V6.83A3.001 3.001 0 0021 1zm-1 3a1 1 0 112 0 1 1 0 01-2 0zM9 3a3 3 0 00-1 5.83v3.584l2 2V23h2v-9.414l-2-2V8.829A3.001 3.001 0 009 3zM8 6a1 1 0 112 0 1 1 0 01-2 0zM3 9a3 3 0 101.293 5.708L6 16.414V23h2v-7.414l-2.292-2.293A3 3 0 003 9zm-1 3a1 1 0 112 0 1 1 0 01-2 0z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a3 3 0 113.97 2.84V23h-2V11.819A3.001 3.001 0 0112 9zm3-1a1 1 0 100 2 1 1 0 000-2z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Technology24;
