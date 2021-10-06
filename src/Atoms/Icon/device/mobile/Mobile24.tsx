import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Mobile24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1v22h14V1H5zm5 2H7v13h10V3h-3v1h-4V3zM7 21v-3h10v3H7z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Mobile24;
