import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Watchlist24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12s4.582 8 12 8 12-8 12-8-4.582-8-12-8-12 8-12 8zm2.396 0l.053.074a19.165 19.165 0 002.158 2.487C6.507 16.394 9.032 18 12 18s5.493-1.606 7.393-3.44A19.16 19.16 0 0021.604 12a19.158 19.158 0 00-2.21-2.56C17.493 7.605 14.967 6 12 6S6.507 7.606 4.607 9.44A19.163 19.163 0 002.396 12z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Watchlist24;
