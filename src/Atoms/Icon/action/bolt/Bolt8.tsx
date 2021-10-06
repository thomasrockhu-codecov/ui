import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Bolt8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M5.167 0L.5 4.5h2.917L2.833 8 7.5 3.5H4.583L5.167 0z" fill={iconColor} />
    </IconBase>
  );
};

export default Bolt8;
