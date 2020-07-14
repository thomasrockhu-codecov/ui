import React from 'react';
import { Typography } from '../../..';
import { TextWrapperComponent } from './Cell.types';
import { getFontSizeTypographyType } from '../shared/textUtils';
import { StyledTruncateTooltip } from '../shared';
import { FontSize } from '../shared/shared.types';

const Text: React.FC<{ fontSize: FontSize }> = ({ fontSize, children }) => (
  <Typography type={getFontSizeTypographyType(fontSize)} color={t => t.color.text}>
    {children}
  </Typography>
);

export const TextWrapper: TextWrapperComponent = ({
  fontSize = 'm',
  truncate = true,
  children,
}) => {
  if (!truncate) {
    return <Text fontSize={fontSize}>{children}</Text>;
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text fontSize={fontSize}>{children}</Text>
    </StyledTruncateTooltip>
  );
};
