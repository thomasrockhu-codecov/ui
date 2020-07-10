import React from 'react';
import { Typography } from '../../..';
import { TextWrapperComponent } from './Footer.types';
import { getFontSizeTypographyType } from '../shared/textUtils';
import { StyledTruncateTooltip } from '../shared';
import { FontSize } from '../shared/shared.types';

const Text: React.FC<{ fontSize: FontSize; weight: string }> = ({ children, weight, fontSize }) => (
  <Typography type={getFontSizeTypographyType(fontSize)} color={t => t.color.text} weight={weight}>
    {children}
  </Typography>
);

export const TextWrapper: TextWrapperComponent = ({
  fontSize = 'm',
  children,
  weight = 'bold',
  truncate = true,
}) => {
  if (!truncate) {
    return (
      <Text fontSize={fontSize} weight={weight}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text fontSize={fontSize} weight={weight}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
