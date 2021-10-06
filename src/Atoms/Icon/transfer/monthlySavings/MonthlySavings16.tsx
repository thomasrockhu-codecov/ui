import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const MonthlySavings16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M4.5 1v.5h7v-1h1v1h3v14H.5v-14h3v-1h1V1zm-1 2v-.5h-2v3h13v-3h-2v1h-1v-1h-7v1h-1V3zM2 6.5h-.5v8h13v-8H2zm10.5 5a1 1 0 11-2 0 1 1 0 012 0z"
        fill={iconColor}
        stroke={iconColor}
      />
    </IconBase>
  );
};

export default MonthlySavings16;
