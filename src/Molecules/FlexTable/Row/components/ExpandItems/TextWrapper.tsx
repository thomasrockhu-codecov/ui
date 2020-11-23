import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';
import { Text } from '../../../shared';
import { Theme } from '../../../../../theme/theme.types';

export const TextWrapper: TextWrapperComponent = ({ truncate = true, isLabel, children }) => {
  const colorProp = isLabel ? { color: (t: Theme) => t.color.label } : {};
  if (!truncate) {
    return <Text {...colorProp}>{children}</Text>;
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text {...colorProp}>{children}</Text>
    </TruncateWithTooltip>
  );
};
