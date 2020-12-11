import React, { cloneElement, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import { TooltipComponent, Props } from './Tooltip.types';
import { Typography, Portal } from '../..';
import { BORDER_SIZE, TRIANGLE_SIZE } from './consts';

const StyledArrow = styled.span<{ inModal: Props['inModal'] }>`
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    z-index: ${(p) => (p.inModal ? p.theme.zIndex.overlayInModal : p.theme.zIndex.overlay)};
    left: 0;
    top: 0;
  }

  &::after {
    z-index: ${(p) => (p.inModal ? p.theme.zIndex.overlayInModal : p.theme.zIndex.overlay)};
  }
`;

const StyledTooltip = styled.div<any>`
  pointer-events: none;
  padding: ${(p) => p.theme.spacing.unit(1)}px ${(p) => p.theme.spacing.unit(2)}px;
  box-shadow: 0 10px 16px ${(p) => p.theme.color.shadowModal};
  background: ${(p) => p.theme.color.bubbleBackground};
  border: solid ${BORDER_SIZE}px ${(p) => p.theme.color.bubbleBorder};
  max-width: ${(p) => p.theme.spacing.unit(p.maxWidth)}px;
  word-break: break-all;
`;

const StyledTooltipContainer = styled.span<any>`
  z-index: ${(p) => p.theme.zIndex.overlayInModal};
  &[data-popper-placement^='top'] > ${StyledTooltip} {
    margin-bottom: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='bottom'] > ${StyledTooltip} {
    margin-top: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='left'] > ${StyledTooltip} {
    margin-right: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='right'] > ${StyledTooltip} {
    margin-left: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='top'] > ${StyledArrow} {
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
      border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
        ${(p) => p.theme.color.bubbleBackground};
    }
  }

  &[data-popper-placement^='bottom'] > ${StyledArrow} {
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
  }

  &[data-popper-placement^='left'] > ${StyledArrow} {
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
      border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
        ${(p) => p.theme.color.bubbleBackground};
    }
  }

  &[data-popper-placement^='right'] > ${StyledArrow} {
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
  }
`;

export const Tooltip: TooltipComponent = ({
  children,
  label,
  ariaLabel,
  position = 'bottom',
  inModal,
  maxWidth = 50,
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    placement: position,
  });

  return (
    <>
      {cloneElement(children as React.ReactElement, {
        ref: setReferenceElement,
      })}

      <Portal>
        <StyledTooltipContainer
          ref={setPopperElement}
          aria-label={ariaLabel}
          position={position}
          inModal={inModal}
          maxWidth={maxWidth}
          style={styles.popper}
          {...attributes.popper}
        >
          <StyledArrow ref={setArrowElement as any} inModal={inModal} style={styles.arrow} />
          <StyledTooltip inModal={inModal} maxWidth={maxWidth}>
            <Typography type="tertiary">{label}</Typography>
          </StyledTooltip>
        </StyledTooltipContainer>
      </Portal>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
