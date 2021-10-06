import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Energy32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.34 1h10.137l-4 10h6.568L10.789 30.614l-1.75-.889L12.673 17h-6.19L13.34 1zm1.32 2L9.515 15h5.81l-2.947 10.312L21.955 13h-5.432l4-10h-5.864z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Energy32;
