import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const OtherIndustry32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3H3v12h12V3zM5 13V5h8v8H5zM15 17H3v12h12V17zM5 27v-8h8v8H5zM17 3h12v12H17V3zm2 2v8h8V5h-8zM29 17H17v12h12V17zM19 27v-8h8v8h-8z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default OtherIndustry32;
