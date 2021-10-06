import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cross16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M9.414 8l5.793-5.793L13.793.793 8 6.586 2.207.793.793 2.207 6.586 8 .793 13.793l1.414 1.414L8 9.414l5.793 5.793 1.414-1.414L9.414 8z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Cross16;
