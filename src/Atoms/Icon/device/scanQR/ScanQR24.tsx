import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ScanQR24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M8 1H1v7h2V3h5V1zM23 8V1h-7v2h5v5h2zM1 23v-7h2v5h5v2H1zM16 23h7v-7h-2v5h-5v2zM5 15v-2h6v2H9v2H7v-2H5z"
        fill={iconColor}
      />
      <path
        d="M7 17v2H5v-2h2zM9 17h2v2H9v-2zM13 9v2h6V9h-2V7h2V5h-2v2h-2V5h-2v2h2v2h-2z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5v6h6V5H5zm4 2H7v2h2V7zM13 19v-6h6v6h-6zm2-4h2v2h-2v-2z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default ScanQR24;
