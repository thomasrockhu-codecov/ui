import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Withdraw32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 16a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4H6a1 1 0 00-1 1v3h24v16H5v3a1 1 0 001 1h5v2H6a3 3 0 01-3-3V5a3 3 0 013-3h5v2zM5 22h22V10H5v12z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Withdraw32;
