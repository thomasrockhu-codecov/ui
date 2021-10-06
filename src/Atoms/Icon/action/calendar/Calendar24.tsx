import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Calendar24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1v1h10V1h2v1h4v21H1V2h4V1h2zm10 3v1h2V4h2v4H3V4h2v1h2V4h10zm4 6H3v11h18V10z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Calendar24;
