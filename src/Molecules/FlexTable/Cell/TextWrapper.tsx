import React from 'react';
import { TextWrapperComponent } from './Cell.types';
import { StyledTruncateTooltip, Text } from '../shared';

export const TextWrapper: TextWrapperComponent = ({ truncate = true, children }) => {
  if (!truncate) {
    return <Text color={(t) => t.color.text}>{children}</Text>;
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text color={(t) => t.color.text}>{children}</Text>
    </StyledTruncateTooltip>
  );
};
