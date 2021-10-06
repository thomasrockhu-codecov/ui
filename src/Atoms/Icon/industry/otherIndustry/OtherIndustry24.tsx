import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const OtherIndustry24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1H1v10h10V1zM3 9V3h6v6H3zM11 13H1v10h10V13zm-8 8v-6h6v6H3zM13 1h10v10H13V1zm2 2v6h6V3h-6zM23 13H13v10h10V13zm-8 8v-6h6v6h-6z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default OtherIndustry24;
