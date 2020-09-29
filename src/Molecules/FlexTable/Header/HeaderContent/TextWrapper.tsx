import React from 'react';
import { getFontSizeTypographyType } from '../../shared/textUtils';
import { TextWrapperComponent } from './HeaderContent.types';
import { Typography } from '../../../..';
import { StyledTruncateTooltip } from '../../shared';
import { FontSize } from '../../shared/shared.types';

const Text: React.FC<{ className?: string; fontSize: FontSize; sorted?: boolean }> = ({
  className,
  children,
  sorted,
  fontSize,
}) => (
  <Typography
    className={className}
    type={getFontSizeTypographyType(fontSize)}
    color={(t) => (sorted ? t.color.text : t.color.label)}
    weight={sorted ? 'bold' : 'regular'}
  >
    {children}
  </Typography>
);

export const TextWrapper: TextWrapperComponent = ({
  className,
  fontSize = 'm',
  sorted,
  children,
  truncate = true,
}) => {
  if (!truncate) {
    return (
      <Text className={className} fontSize={fontSize} sorted={sorted}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip className={className} label={children}>
      <Text fontSize={fontSize} sorted={sorted}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
