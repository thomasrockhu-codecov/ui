import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Financial24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M12 1.906l10.32 4.586-.813 1.828L12 4.094 2.492 8.32 1.68 6.492 12 1.906zM20 22H4v-2h16v2zM7 18V9H5v9h2zM13 9v9h-2V9h2zM19 18V9h-2v9h2z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Financial24;
