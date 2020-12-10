import React, { cloneElement, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import { TooltipComponent } from './Tooltip.types';
import { Typography } from '../..';
import { BORDER_SIZE } from './consts';
import RootPortal from './lib/RootPortal';

const StyledArrow = styled.span`
  padding: 20px;
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

  &[data-popper-placement^='top'] > ${StyledArrow} {
    bottom: -4px;
    background: red;
  }
  
  &[data-popper-placement^='bottom'] > ${StyledArrow}{
    top: -4px;
    background: blue;
  }
  
  &[data-popper-placement^='left'] > ${StyledArrow}{
    right: -4px;
  }
  
  &[data-popper-placement^='right'] > ${StyledArrow} {
    left: -4px;
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
        <StyledTooltip
          ref={setPopperElement}
          aria-label={ariaLabel}
          position={position}
          inModal={inModal}
          maxWidth={maxWidth}
          style={styles.popper}
          {...attributes.popper}
        >
           <StyledArrow ref={setArrowElement} style={styles.arrow} />
          <Typography type="tertiary">{label}</Typography>
        </StyledTooltip>
      </RootPortal>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
