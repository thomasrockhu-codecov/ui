import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Profile32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2a7 7 0 100 14 7 7 0 000-14zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z"
        fill={iconColor}
      />
      <path
        d="M6 18a4 4 0 00-4 4v7h2v-7a2 2 0 012-2h20a2 2 0 012 2v7h2v-7a4 4 0 00-4-4H6z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Profile32;
