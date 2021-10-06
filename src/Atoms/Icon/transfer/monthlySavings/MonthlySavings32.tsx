import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const MonthlySavings32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M10 15H7v-2h3v2zM7 20h3v-2H7v2zM10 25H7v-2h3v2zM12 15h3v-2h-3v2zM15 20h-3v-2h3v2zM12 25h3v-2h-3v2zM20 15h-3v-2h3v2zM17 20h3v-2h-3v2zM20 25h-3v-2h3v2zM22 15h3v-2h-3v2zM25 20h-3v-2h3v2zM23.5 25.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 2H10V1H8v1H2v28h28V2h-6V1h-2v1zM8 5V4H4v4h24V4h-4v1h-2V4H10v1H8zm20 5H4v18h24V10z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default MonthlySavings32;
