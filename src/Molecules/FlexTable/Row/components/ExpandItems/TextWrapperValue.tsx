import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';
import Text from '../../../shared/TextWrapper/Text';

export const TextWrapperValue: TextWrapperComponent = ({ truncate = true, children }) => {
  if (!truncate) {
    return <Text>{children}</Text>;
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text>{children}</Text>
    </TruncateWithTooltip>
  );
};
