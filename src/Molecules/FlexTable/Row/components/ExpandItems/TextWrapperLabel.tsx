import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';
import { Text } from '.';

// FIXME do we really need TextWrapperLabel and TextWrapperValue? only differnece is optional color...
export const TextWrapperLabel: TextWrapperComponent = ({
  fontSize,
  sm,
  md,
  lg,
  xl,
  truncate = true,
  children,
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
