import React from 'react';
import { TextWrapperComponent } from './Cell.types';
import { StyledTruncateTooltip, Text } from '../shared';

export const TextWrapper: TextWrapperComponent = ({
  className,
  truncate = true,
  weight,
  measureFullWidth,
  children,
}) => {
  if (!truncate) {
    return (
      <Text className={className} weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children} measureFullWidth={measureFullWidth}>
      <Text className={className} weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
