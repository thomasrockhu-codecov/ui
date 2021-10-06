import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Withdraw16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2H2v1h14v10H2v1zm12-3H2V5h12v6z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Withdraw16;
