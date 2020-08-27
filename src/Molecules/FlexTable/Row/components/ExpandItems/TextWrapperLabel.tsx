import React from 'react';
import { FontSize } from '../../../shared/shared.types';
import { getFontSizeTypographyType } from '../../../shared/textUtils';
import { Typography, TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';

const Text: React.FC<{ fontSize: FontSize }> = ({ fontSize, children }) => (
  <Typography type={getFontSizeTypographyType(fontSize)} color={t => t.color.label}>
    {children}
  </Typography>
);

export const TextWrapperLabel: TextWrapperComponent = ({ fontSize, children, truncate = true }) => {
  if (!truncate) {
    return <Text fontSize={fontSize}>{children}</Text>;
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text fontSize={fontSize}>{children}</Text>
    </TruncateWithTooltip>
  );
};
