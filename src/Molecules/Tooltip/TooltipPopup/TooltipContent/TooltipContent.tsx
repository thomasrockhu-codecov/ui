import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { StyledTooltipProps } from './TooltipContent.types';
import { BORDER_SIZE } from '../../consts';
import { Typography } from '../../../..';

const StyledTooltip = styled.div<StyledTooltipProps>`
  padding: ${(p) => p.theme.spacing.unit(1)}px ${(p) => p.theme.spacing.unit(2)}px;
  box-shadow: 0 10px 16px ${(p) => p.theme.color.shadowModal};
  background: ${(p) => p.theme.color.bubbleBackground};
  border: solid ${BORDER_SIZE}px ${(p) => p.theme.color.bubbleBorder};
  ${(p) => (p.maxWidth ? `max-width: ${p.theme.spacing.unit(p.maxWidth)}px;` : '')}
  overflow-wrap: break-word;
`;

type Props = {
  readonly maxWidth?: any;
  readonly label?: any;
  readonly ariaLabel?: any;
};

const TooltipContent = forwardRef<HTMLDivElement, Props>(
  ({ label, ariaLabel, maxWidth, ...htmlDivProps }, ref) => {
    return (
      <StyledTooltip
        ref={ref as any}
        maxWidth={maxWidth}
        aria-label={ariaLabel}
        role={ariaLabel ? 'tooltip' : undefined}
        {...htmlDivProps}
      >
        <Typography type="tertiary">{label}</Typography>
      </StyledTooltip>
    );
  },
);

export default TooltipContent;
