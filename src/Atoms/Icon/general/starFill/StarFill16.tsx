import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const StarFill16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8 .4L10.769 5 16 6.213l-3.52 4.055.464 5.35L8 13.522l-4.944 2.095.464-5.35L0 6.212l5.231-1.211L8 .4z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default StarFill16;
