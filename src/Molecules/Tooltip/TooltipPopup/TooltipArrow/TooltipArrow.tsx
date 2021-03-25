import React, { forwardRef } from 'react';
import styled, { css, CSSProperties } from 'styled-components';
import { Props } from './TooltipArrow.types';
import { BORDER_SIZE, TRIANGLE_SIZE } from '../../consts';

const arrowTop = css`
  top: 3px;
  margin-left: -${TRIANGLE_SIZE}px;
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 2px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
      ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowBottom = css`
  bottom: 13px;
  margin-left: -${TRIANGLE_SIZE}px;
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-top: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 0;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowLeft = css`
  left: 3px;
  margin-top: -${TRIANGLE_SIZE}px;
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
      ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowRight = css`
  left: auto;
  right: 13px;
  margin-top: -${TRIANGLE_SIZE}px;
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-left: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: 0;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.theme.color.bubbleBackground};
  }
`;

const StyledArrow = styled.span<Props>`
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    left: 0;
    top: 0;
  }

  ${(p) => (p.position === 'top' ? arrowBottom : '')}
  ${(p) => (p.position === 'bottom' ? arrowTop : '')}
  ${(p) =>
    p.position === 'left' ? arrowRight : ''}
  ${(p) => (p.position === 'right' ? arrowLeft : '')}
`;

const TooltipArrow: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<{ readonly position?: any; style?: CSSProperties }> &
    React.RefAttributes<unknown>
> = forwardRef(({ position, style }, ref) => {
  return <StyledArrow ref={ref as any} position={position} style={style} />;
});

export default TooltipArrow;
