import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Star24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.807 7.85L12 1.5 8.193 7.85 1 9.52l4.84 5.596-.638 7.383L12 19.61l6.798 2.89-.638-7.383L23 9.521 15.807 7.85zm3.513 2.87l-4.792-1.115L12 5.39 9.472 9.605 4.68 10.72l3.225 3.729-.424 4.91L12 17.436l4.52 1.922-.425-4.91 3.225-3.729z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Star24;
