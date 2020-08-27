import React from 'react';
import { Typography, TruncateWithTooltip } from '../../../../..';
import { FontSize } from '../../../shared/shared.types';
import { getFontSizeTypographyType } from '../../../shared/textUtils';
import { TextWrapperComponent } from './ExpandItems.types';

const Text: React.FC<{ fontSize: FontSize }> = ({ fontSize, children }) => (
  <Typography type={getFontSizeTypographyType(fontSize)}>{children}</Typography>
);

export const TextWrapperValue: TextWrapperComponent = ({ fontSize, children, truncate = true }) => {
  if (!truncate) {
    return <Text fontSize={fontSize}>{children}</Text>;
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text fontSize={fontSize}>{children}</Text>
    </TruncateWithTooltip>
  );
};
