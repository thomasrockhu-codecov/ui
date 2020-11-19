import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';
import Text from '../../../shared/TextWrapper/Text';

export const TextWrapperLabel: TextWrapperComponent = ({ truncate = true, children }) => {
  if (!truncate) {
    return <Text color={(t) => t.color.label}>{children}</Text>;
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text color={(t) => t.color.label}>{children}</Text>
    </TruncateWithTooltip>
  );
};
