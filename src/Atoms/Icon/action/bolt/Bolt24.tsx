import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Bolt24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={26}>
      <path
        d="M15 4L5 15h5l-1 7 10-11h-5l1-7z"
        stroke={iconColor}
        strokeWidth={2}
        fill="transparent"
      />
    </IconBase>
  );
};

export default Bolt24;
