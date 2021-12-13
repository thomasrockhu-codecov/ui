import React from 'react';
import { Icon } from '../../../../index';

type ChevronIconProps = {
  direction: 'left' | 'right' | 'up' | 'down';
  size: 8 | 16 | 24 | 32;
  inline?: boolean;
  color?: string;
};

const ChevronIcon: React.FC<ChevronIconProps> = ({
  direction,
  size,
  color = 'inherit',
  ...rest
}) => {
  const componentName = `Chevron${direction[0].toUpperCase()}${direction.slice(1)}${size}`;
  const IconComponent = Icon[componentName];
  return <IconComponent color={color} {...rest} />;
};

export default React.memo(ChevronIcon);
