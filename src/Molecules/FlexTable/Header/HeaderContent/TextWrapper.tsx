import React from 'react';
import { TextWrapperComponent } from './HeaderContent.types';
import { StyledTruncateTooltip } from '../../shared';
import Text from '../../shared/TextWrapper/Text';

export const TextWrapper: TextWrapperComponent = ({
  className,
  sorted,
  truncate = true,
  children,
}) => {
  if (!truncate) {
    return (
      <Text
        className={className}
        color={(t) => (sorted ? t.color.text : t.color.label)}
        weight={sorted ? 'bold' : 'regular'}
      >
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text
        className={className}
        color={(t) => (sorted ? t.color.text : t.color.label)}
        weight={sorted ? 'bold' : 'regular'}
      >
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
