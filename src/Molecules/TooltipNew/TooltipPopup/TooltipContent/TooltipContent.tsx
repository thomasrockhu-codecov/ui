import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TooltipContentComponent, StyledTooltipProps } from './TooltipContent.types';
import { BORDER_SIZE } from '../../consts';
import { Typography } from '../../../..';

const StyledTooltip = styled.div<StyledTooltipProps>`
  pointer-events: none;
  padding: ${(p) => p.theme.spacing.unit(1)}px ${(p) => p.theme.spacing.unit(2)}px;
  box-shadow: 0 10px 16px ${(p) => p.theme.color.shadowModal};
  background: ${(p) => p.theme.color.bubbleBackground};
  border: solid ${BORDER_SIZE}px ${(p) => p.theme.color.bubbleBorder};
  ${(p) => (p.maxWidth ? `max-width: ${p.theme.spacing.unit(p.maxWidth)}px;` : '')}
  word-break: break-all;
`;

const TooltipContent: TooltipContentComponent = forwardRef(
  ({ label, ariaLabel, maxWidth }, ref) => {
    return (
      <StyledTooltip ref={ref as any} maxWidth={maxWidth} ariaLabel={ariaLabel}>
        <Typography type="tertiary">{label}</Typography>
      </StyledTooltip>
    );
  },
);

export default TooltipContent;
