import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './TextWrapper.types';
import Text from './Text';

const TextWrapper: TextWrapperComponent = ({ truncate = true, color, children }) => {
  if (!truncate) {
    return <Text color={color}>{children}</Text>;
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text color={color}>{children}</Text>
    </TruncateWithTooltip>
  );
};

export default TextWrapper;
