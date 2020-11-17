import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';
import { Text } from '.';

export const TextWrapperValue: TextWrapperComponent = ({
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
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl}>
        {children}
      </Text>
    );
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl}>
        {children}
      </Text>
    </TruncateWithTooltip>
  );
};
