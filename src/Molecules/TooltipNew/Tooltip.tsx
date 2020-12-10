import React, { cloneElement, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import { TooltipComponent, Props } from './Tooltip.types';
import { Typography } from '../..';
import { BORDER_SIZE, TRIANGLE_SIZE } from './consts';
import RootPortal from './lib/RootPortal';

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

const StyledTooltip = styled.span<any>`
  z-index: ${(p) => (p.inModal ? p.theme.zIndex.overlayInModal : p.theme.zIndex.overlay)};
  pointer-events: none;
  position: absolute;
  padding: ${(p) => p.theme.spacing.unit(1)}px ${(p) => p.theme.spacing.unit(2)}px;
  box-shadow: 0 10px 16px ${(p) => p.theme.color.shadowModal};
  background: ${(p) => p.theme.color.bubbleBackground};
  border: solid ${BORDER_SIZE}px ${(p) => p.theme.color.bubbleBorder};
  max-width: ${(p) => p.theme.spacing.unit(p.maxWidth)}px;
  word-break: break-all;
`;

const StyledTooltipContainer = styled.span<any>`
  &[data-popper-placement^='top'] > ${StyledArrow} {
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

  &[data-popper-placement^='left'] > ${StyledArrow} {
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
  });

  return (
    <>
      {cloneElement(children as React.ReactElement, {
        ref: setReferenceElement,
      })}

      <RootPortal>
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
          <StyledTooltip inModal={inModal}>
            <Typography type="tertiary">{label}</Typography>
          </StyledTooltip>
        </StyledTooltipContainer>
      </RootPortal>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
