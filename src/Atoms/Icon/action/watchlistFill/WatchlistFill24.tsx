import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Watchlist24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20c7.418 0 12-8 12-8s-4.582-8-12-8-12 8-12 8 4.582 8 12 8zm0-5a3 3 0 100-6 3 3 0 000 6z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Watchlist24;
