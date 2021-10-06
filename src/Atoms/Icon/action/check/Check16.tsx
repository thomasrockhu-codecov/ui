import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.85 3.657l-9.9 9.9L.293 7.898l1.414-1.414 4.243 4.243 8.485-8.485 1.414 1.414z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Check16;
