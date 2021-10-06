import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Calendar32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 2H9V1H7v1H1v29h30V2h-6V1h-2v1zM7 5V4H3v5h26V4h-4v1h-2V4H9v1H7zm22 6H3v18h26V11z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Calendar32;
