import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Trustly16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2v4.91h-4.819V14H5.274v-2.727L8.545 8 5.273 4.727V6.91H1V2h14z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Trustly16;
