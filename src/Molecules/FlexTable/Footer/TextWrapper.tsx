import React from 'react';
import { TextWrapperComponent } from './Footer.types';
import { StyledTruncateTooltip, Text } from '../shared';

export const TextWrapper: TextWrapperComponent = ({
  children,
  weight = 'bold',
  truncate = true,
  className,
}) => {
  if (!truncate) {
    return (
      <Text className={className} weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text className={className} weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
