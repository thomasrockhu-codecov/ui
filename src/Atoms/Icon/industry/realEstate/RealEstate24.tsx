import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RealEstate24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .586l11 11V23h-2V12.414l-9-9-9 9V21h5.143v-7.143h7.714V23h-2v-7.143h-3.714V23H1V11.586l11-11z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default RealEstate24;
