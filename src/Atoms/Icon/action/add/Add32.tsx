import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Add32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M15 17v14h2V17h14v-2H17V1h-2v14H1v2h14z" fill={iconColor} />
    </IconBase>
  );
};

export default Add32;
