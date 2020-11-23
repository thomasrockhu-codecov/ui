import React from 'react';
import { TextWrapperComponent } from './Footer.types';
import { StyledTruncateTooltip, Text } from '../shared';

export const TextWrapper: TextWrapperComponent = ({
  children,
  weight = 'bold',
  truncate = true,
}) => {
  if (!truncate) {
    return (
      <Text weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
