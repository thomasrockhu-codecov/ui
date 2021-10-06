import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const More24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a3 3 0 10-6 0 3 3 0 006 0zm-2 0a1 1 0 10-2 0 1 1 0 002 0zM15 12a3 3 0 10-6 0 3 3 0 006 0zm-2 0a1 1 0 10-2 0 1 1 0 002 0zM20 9a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 110 2 1 1 0 010-2z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default More24;
