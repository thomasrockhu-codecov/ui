import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Security24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.001.763l1.443 1.053c2.022 1.44 4.304 2.35 6.341 1.903l1.206-.264L21 4.69c.074 11.103-4.913 15.877-7.434 17.558l-.008.006-.166.109-.165.103-.155.094-.144.083-.133.074-.122.066-.153.078-.524.254-.608-.302-.116-.06-.125-.069-.137-.078-.147-.087-.158-.096-.168-.108-.176-.117-.092-.063-.008-.006-.181-.128C7.463 20.115 2.93 15.278 3 4.69l.008-1.235 1.206.264c1.993.437 4.224-.444 6.229-1.825L12 .763zM12 3.237l-.4.29-.01.007C9.752 4.802 7.416 5.917 5.012 5.827c.245 9.097 4.192 13.075 6.233 14.548l.165.117.069.047.15.1.137.088.128.078.106.063.052-.03.125-.076.134-.084.148-.097c1.938-1.294 6.272-5.209 6.529-14.752-2.454.096-4.842-1.056-6.71-2.388l-.009-.006-.27-.198z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Security24;
