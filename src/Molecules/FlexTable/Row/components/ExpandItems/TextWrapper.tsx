import React from 'react';
import { TruncateWithTooltip } from '../../../../..';
import { TextWrapperComponent } from './ExpandItems.types';
import { Text } from '../../../shared';
import { Theme } from '../../../../../theme/theme.types';

export const TextWrapper: TextWrapperComponent = ({
  className,
  truncate = true,
  isLabel = false,
  children,
}) => {
  const colorProp = isLabel ? { color: (t: Theme) => t.color.label } : {};
  if (!truncate) {
    return (
      <Text className={className} {...colorProp}>
        {children}
      </Text>
    );
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text className={className} {...colorProp}>
        {children}
      </Text>
    </TruncateWithTooltip>
  );
};
