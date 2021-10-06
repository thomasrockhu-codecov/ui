import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowRight32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M17.172 5l10 10H1v2h26.176l-10 10h2.828L31 16.004V16L20 5h-2.828z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default ArrowRight32;
