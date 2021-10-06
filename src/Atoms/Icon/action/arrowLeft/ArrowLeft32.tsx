import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowLeft32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M14.828 27l-10-10H31v-2H4.824l10-10h-2.828L1 15.996V16l11 11h2.828z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default ArrowLeft32;
