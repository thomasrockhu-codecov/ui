import React from 'react';
import { StyledTruncateTooltip } from '../shared';
import Text from '../shared/TextWrapper/Text';

export const TextWrapper: React.FC<{
  className?: string;
  truncate?: boolean;
  children: React.ReactNode;
}> = ({ className, truncate = true, children }) => {
  if (!truncate) {
    return (
      <Text className={className} color={(t) => t.color.text}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text className={className} color={(t) => t.color.text}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
