import React, { cloneElement, useState, forwardRef } from 'react';
import { TooltipComponent } from './Tooltip.types';
import { TooltipPopup } from './TooltipPopup';
import { wrapEvent } from '../../common/utils';
import { useTooltip } from './hooks';

export const Tooltip: TooltipComponent = forwardRef(
  (
    { children, label, ariaLabel, position = 'bottom', mode = 'hover', inModal, maxWidth = 50 },
    ref,
  ) => {
    const child = React.Children.only(children) as any;
    const [triggerElement, setTriggerElement] = useState(undefined);
    const {
      isOpen,
      handleMouseEnter,
      handleMouseMove,
      handleFocus,
      handleBlur,
      handleMouseLeave,
      handleKeyDown,
      handleMouseDown,
    } = useTooltip(mode);

    return (
      <>
        {cloneElement(child, {
          ref: setTriggerElement,
          onMouseEnter: wrapEvent(child.props.onMouseEnter, handleMouseEnter),
          onMouseMove: wrapEvent(child.props.onMouseMove, handleMouseMove),
          onFocus: wrapEvent(child.props.onFocus, handleFocus),
          onBlur: wrapEvent(child.props.onBlur, handleBlur),
          onMouseLeave: wrapEvent(child.props.onMouseLeave, handleMouseLeave),
          onKeyDown: wrapEvent(child.props.onKeyDown, handleKeyDown),
          onMouseDown: wrapEvent(child.props.onMouseDown, handleMouseDown),
        })}

        {isOpen && (
          <TooltipPopup
            ref={ref as any}
            triggerElement={triggerElement}
            ariaLabel={ariaLabel}
            label={label}
            position={position}
            inModal={inModal}
            maxWidth={maxWidth}
          />
        )}
      </>
    );
  },
);

Tooltip.displayName = 'Tooltip';
