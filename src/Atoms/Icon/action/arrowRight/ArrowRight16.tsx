import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowRight16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M11.167 9l-4 4h2.828l5-5-5-5H7.167l4 4H1v2h10.167z" fill={iconColor} />
    </IconBase>
  );
};

export default ArrowRight16;
