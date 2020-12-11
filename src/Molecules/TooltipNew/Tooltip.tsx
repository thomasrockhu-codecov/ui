import React, { cloneElement, useState, forwardRef } from 'react';
import { TooltipComponent } from './Tooltip.types';
import { TooltipPopup } from './TooltipPopup';

export const Tooltip: TooltipComponent = forwardRef(
  ({ children, label, ariaLabel, position = 'bottom', inModal, maxWidth = 50 }, ref) => {
    const [triggerElement, setTriggerElement] = useState(undefined);

    return (
      <>
        {cloneElement(children as React.ReactElement, {
          ref: setTriggerElement,
        })}

        <TooltipPopup
          ref={ref as any}
          triggerElement={triggerElement}
          ariaLabel={ariaLabel}
          label={label}
          position={position}
          inModal={inModal}
          maxWidth={maxWidth}
        />
      </>
    );
  },
);

Tooltip.displayName = 'Tooltip';
