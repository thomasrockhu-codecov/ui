import React, { forwardRef, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import { Typography, Portal } from '../../..';
import { TooltipArrow } from './TooltipArrow';
import { TooltipContent } from './TooltipContent';
import { TooltipPopupComponent, StyledTooltipPopupProps } from './TooltipPopup.types';
import { mergeRefs } from '../../../common/utils';

const StyledTooltipPopup = styled.span<StyledTooltipPopupProps>`
  z-index: ${(p) => (p.inModal ? p.theme.zIndex.overlayInModal : p.theme.zIndex.overlay)};
  pointer-events: none;

  &[data-popper-placement^='top'] {
    padding-bottom: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='bottom'] {
    padding-top: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='left'] {
    padding-right: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='right'] {
    padding-left: ${(p) => p.theme.spacing.unit(3)}px;
  }
`;

const TooltipPopup: TooltipPopupComponent = forwardRef(
  ({ id, label, ariaLabel, position, inModal, maxWidth, triggerElement }, ref) => {
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    /**
      We're using Popper.js for convenient tooltip placement.
    */

    const { styles, attributes, state } = usePopper(triggerElement, popperElement, {
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
      placement: position,
    });

    return (
      <Portal>
        <StyledTooltipPopup
          id={id}
          ref={mergeRefs([setPopperElement, ref])}
          inModal={inModal}
          maxWidth={maxWidth}
          style={styles.popper}
          {...attributes.popper}
        >
          <TooltipArrow
            ref={setArrowElement as any}
            position={state?.placement as any}
            style={styles.arrow}
          />
          <TooltipContent label={label} ariaLabel={ariaLabel} maxWidth={maxWidth}>
            <Typography type="tertiary">{label}</Typography>
          </TooltipContent>
        </StyledTooltipPopup>
      </Portal>
    );
  },
);

export default TooltipPopup;
