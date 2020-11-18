import React from 'react';
import { StyledTruncateTooltip } from '../shared';
import { Text } from '../Row/components/ExpandItems';
import { TextWrapperComponent } from '../Row/components/ExpandItems/ExpandItems.types';

export const TextWrapper: TextWrapperComponent = ({
  fontSize = 'm',
  sm,
  md,
  lg,
  xl,
  truncate = true,
  children,
}) => {
  if (!truncate) {
    return (
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl} color={(t) => t.color.text}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl} color={(t) => t.color.text}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
