import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Watchlist16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8s-3 5-8 5-8-5-8-5 3-5 8-5 8 5 8 5zm-8 2a2 2 0 100-4 2 2 0 000 4z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Watchlist16;
