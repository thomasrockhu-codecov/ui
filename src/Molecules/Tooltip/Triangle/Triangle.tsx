import React from 'react';
import styled, { css } from 'styled-components';
import { Portal } from '../../..';
import { InternalArrowProps, TriangleComponent, Props } from './Triangle.types';

import { BORDER_SIZE, TRIANGLE_SIZE, OFFSET } from '../consts';

const arrowUp = css`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const arrowRight = css`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-left: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: 0;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const arrowDown = css`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-top: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 0;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const arrowLeft = css`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const Arrow = styled.div<InternalArrowProps>`
  position: absolute;
  left: ${p => p.left}px;
  top: ${p => p.top}px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    z-index: 1;
    left: 0;
    top: 0;
  }

  &::after {
    z-index: 2;
  }

  ${p => (p.direction === 'right' ? arrowRight : '')}
  ${p => (p.direction === 'down' ? arrowDown : '')}
  ${p => (p.direction === 'left' ? arrowLeft : '')}
  ${p => (p.direction === 'up' ? arrowUp : '')}
`;

const getPosition = (
  triggerRect: Props['triggerRect'],
  tooltipPosition: Props['tooltipPosition'],
) => {
  if (tooltipPosition === 'top') {
    return {
      left: triggerRect && triggerRect.left - TRIANGLE_SIZE + triggerRect.width / 2,
      top: triggerRect && window.scrollY + triggerRect.top - TRIANGLE_SIZE - OFFSET,
    };
  }

  if (tooltipPosition === 'right') {
    return {
      left: triggerRect && triggerRect.right + OFFSET,
      top: triggerRect && window.scrollY + triggerRect.top - TRIANGLE_SIZE + triggerRect.height / 2,
    };
  }

  if (tooltipPosition === 'left') {
    return {
      left: triggerRect && triggerRect.left - TRIANGLE_SIZE - OFFSET,
      top: triggerRect && window.scrollY + triggerRect.top - TRIANGLE_SIZE + triggerRect.height / 2,
    };
  }

  // position === bottom
  return {
    left: triggerRect && triggerRect.left - TRIANGLE_SIZE + triggerRect.width / 2,
    top: triggerRect && triggerRect.bottom + window.scrollY + 4,
  };
};

const getDirection = (tooltipPosition: Props['tooltipPosition']) => {
  if (tooltipPosition === 'top') {
    return 'down';
  }
  if (tooltipPosition === 'right') {
    return 'left';
  }
  if (tooltipPosition === 'left') {
    return 'right';
  }

  return 'up';
};

export const Triangle: TriangleComponent = ({ triggerRect, tooltipPosition }) => {
  const chosenPosition = getPosition(triggerRect, tooltipPosition);
  const direction = getDirection(tooltipPosition);

  return (
    // The Triangle. We position it relative to the trigger, not the popup
    // Using a Portal may seem a little extreme, but we can keep the
    // positioning logic simpler here instead of needing to consider
    // the popup's position relative to the trigger and collisions
    <Portal>
      <Arrow left={chosenPosition.left} top={chosenPosition.top} direction={direction} />
    </Portal>
  );
};

Triangle.displayName = 'Tooltip';
