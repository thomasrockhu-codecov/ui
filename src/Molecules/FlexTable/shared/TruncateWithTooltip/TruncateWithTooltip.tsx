import styled from 'styled-components';
import React, { useState, useCallback } from 'react';
import { Tooltip } from '../../../..';
import { TruncateWithTooltipComponent } from './TruncateWithTooltip.types';

const StyledDiv = styled.div.withConfig({
  shouldForwardProp: prop => !['maxWidth'].includes(prop),
})<{ maxWidth?: string }>`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${p => (p.maxWidth ? `max-width: ${p.maxWidth}` : '')}
`;

export const TruncateWithTooltip: TruncateWithTooltipComponent = ({
  children,
  maxWidth,
  ...tooltipProps
}) => {
  const [isTruncated, setIsTruncated] = useState(false);

  // TODO: Check truncation again on screen or container resize
  const measuredRef = useCallback(node => {
    if (node !== null) {
      const truncated = node.clientWidth < node.scrollWidth;
      setIsTruncated(truncated);
    }
  }, []);

  if (!isTruncated) {
    return (
      <StyledDiv maxWidth={maxWidth} ref={measuredRef}>
        {children}
      </StyledDiv>
    );
  }

  return (
    <Tooltip {...tooltipProps}>
      <StyledDiv maxWidth={maxWidth}>{children}</StyledDiv>
    </Tooltip>
  );
};
