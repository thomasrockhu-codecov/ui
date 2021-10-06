import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Add8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M3 5v3h2V5h3V3H5V0H3v3H0v2h3z" fill={iconColor} />
    </IconBase>
  );
};

export default Add8;
