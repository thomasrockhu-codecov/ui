import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';
import { Text } from '.';

export const TextWrapperLabel: TextWrapperComponent = ({
  fontSize,
  sm,
  md,
  lg,
  xl,
  children,
  truncate = true,
}) => {
  if (!truncate) {
    return (
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl} color={(t) => t.color.label}>
        {children}
      </Text>
    );
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl} color={(t) => t.color.label}>
        {children}
      </Text>
    </TruncateWithTooltip>
  );
};
