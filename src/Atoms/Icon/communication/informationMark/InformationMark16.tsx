import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InformationMark16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15V5h2v10H7zM7 3V1h2v2H7z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default InformationMark16;
