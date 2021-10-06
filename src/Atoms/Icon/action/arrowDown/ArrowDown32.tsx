import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowDown32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M27 17.172l-10 10V1h-2v26.176l-10-10v2.828L15.996 31H16l11-11v-2.828z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default ArrowDown32;
