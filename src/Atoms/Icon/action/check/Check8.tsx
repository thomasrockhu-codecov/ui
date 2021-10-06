import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={8}>
      <path
        d="M1.504 2.648L3.126 4.27 6.496.9 7.91 2.314 3.126 7.098.09 4.062l1.414-1.414z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Check8;
