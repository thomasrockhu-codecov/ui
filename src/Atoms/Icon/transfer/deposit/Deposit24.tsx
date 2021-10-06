import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Deposit24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 21h-4v2h4a3 3 0 003-3V4a3 3 0 00-3-3h-4v2h4a1 1 0 011 1v1H1v14h20v1a1 1 0 01-1 1zM3 7h18v10H3V7z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Deposit24;
