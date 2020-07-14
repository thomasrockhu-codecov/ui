import React from 'react';
import { getFontSizeTypographyType } from '../../shared/textUtils';
import { TextWrapperComponent } from './HeaderContent.types';
import { Typography } from '../../../..';
import { StyledTruncateTooltip } from '../../shared';
import { FontSize } from '../../shared/shared.types';

const Text: React.FC<{ fontSize: FontSize; sorted?: boolean }> = ({
  children,
  sorted,
  fontSize,
}) => (
  <Typography
    type={getFontSizeTypographyType(fontSize)}
    color={t => (sorted ? t.color.text : t.color.label)}
    weight={sorted ? 'bold' : 'regular'}
  >
    {children}
  </Typography>
);

export const TextWrapper: TextWrapperComponent = ({
  fontSize = 'm',
  sorted,
  children,
  truncate = true,
}) => {
  if (!truncate) {
    return (
      <Text fontSize={fontSize} sorted={sorted}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text fontSize={fontSize} sorted={sorted}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
