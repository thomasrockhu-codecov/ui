import React, { forwardRef, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import { Portal } from '../../..';
import { TooltipArrow } from './TooltipArrow';
import { TooltipContent } from './TooltipContent';
import { StyledTooltipPopupProps } from './TooltipPopup.types';
import { mergeRefs } from '../../../common/utils';

const StyledTooltipPopup = styled.span<StyledTooltipPopupProps>`
  z-index: ${(p) => (p.inModal ? p.theme.zIndex.overlayInModal : p.theme.zIndex.overlay)};

  ${(p) => (p.$pointerEvents ? '' : 'pointer-events: none;')}

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

// styled to allow consumers to use it as styling-identifier directly from TooltipPopup.components.TooltipContent
const StyledTooltipContent = styled(TooltipContent)``;
const StyledTooltipArrow = styled(TooltipArrow)``;

const displayName = 'Tooltip Popup';

const components = {
  TooltipContent: StyledTooltipContent,
  TooltipArrow: StyledTooltipArrow,
};

type Props = {
  readonly label?: any;
  readonly maxWidth?: any;
  readonly inModal?: any;
  readonly position?: any;
  readonly triggerElement?: any;
  readonly id?: any;
  readonly ariaLabel?: any;
  readonly pointerEvents?: any;
};

const TooltipPopup = (forwardRef<HTMLSpanElement, Props>(
  (
    {
      id,
      label,
      ariaLabel,
      position,
      inModal,
      maxWidth,
      triggerElement,
      pointerEvents = true,
      ...htmlSpanProps
    },
    ref,
  ) => {
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
          $pointerEvents={pointerEvents}
          {...htmlSpanProps}
          {...attributes.popper}
        >
          <StyledTooltipArrow
            ref={setArrowElement as any}
            position={state?.placement as any}
            style={styles.arrow}
          />
          <StyledTooltipContent label={label} ariaLabel={ariaLabel} maxWidth={maxWidth} />
        </StyledTooltipPopup>
      </Portal>
    );
  },
) as any) as React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>> & {
  components: typeof components;
};

TooltipPopup.components = components;
TooltipPopup.displayName = displayName;

export default TooltipPopup;
