import React, { cloneElement, forwardRef, useRef, useState } from 'react';
import { mergeRefs } from '../../common/utils';
import { Box, Button, Flexbox, Icon, Typography } from '../..';
import { TooltipPopup } from '../Tooltip/TooltipPopup';
import { PersistentTooltipComponent } from './PersistentTooltip.types';

export const PersistentTooltip: PersistentTooltipComponent = forwardRef(
  ({ children, position = 'bottom', open, onClose }, ref) => {
    const child = React.Children.only(children) as any;
    const [triggerElement, setTriggerElement] = useState(undefined);
    const triggerElementRef = useRef(null);

    const label = (
      <Box>
        <Flexbox container>
          <Typography type="primary">Im a title</Typography>
          <Button onClick={onClose}>
            <Icon.Cross size={4} />
          </Button>
        </Flexbox>
        <Typography>More description text here.More description text here.</Typography>
      </Box>
    );

    return (
      <>
        {cloneElement(child, { ref: mergeRefs([setTriggerElement, triggerElementRef]) })}
        {open && (
          <TooltipPopup
            ref={ref as any}
            label={label}
            position={position}
            triggerElement={triggerElement}
          />
        )}
      </>
    );
  },
);
