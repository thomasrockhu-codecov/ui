import React, { cloneElement, forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { mergeRefs } from '../../common/utils';
import { Box, Button, Flexbox, Icon, Typography } from '../..';
import { TooltipPopup } from '../Tooltip/TooltipPopup';
import { Props as PersistentTooltipProps } from './PersistentTooltip.types';

const StyledTooltipPopup = styled(TooltipPopup)`
  ${TooltipPopup.components.TooltipContent} {
    background: ${(p) => p.theme.color.backgroundDark};
    padding: ${(p) => p.theme.spacing.unit(3)}px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: solid ${(p) => p.theme.spacing.unit(1)}px
      ${(p) => p.theme.color.tooltipBorderLight};
  }
  ${TooltipPopup.components.TooltipArrow} {
    &:before {
      border-bottom-color: ${(p) => p.theme.color.backgroundDark};
    }
    &:after {
      border-bottom-color: ${(p) => p.theme.color.backgroundDark};
    }
  }
`;

export const PersistentTooltip = forwardRef<HTMLDivElement, PersistentTooltipProps>(
  ({ children, position = 'bottom', open, onClose, ...htmlDivProps }, ref) => {
    const child = React.Children.only(children) as any;
    const [triggerElement, setTriggerElement] = useState(undefined);
    const triggerElementRef = useRef(null);

    const label = (
      <Box>
        <Flexbox container>
          <Typography type="primary" color={(t) => t.color.textLight}>
            Im a title
          </Typography>
          <Button onClick={onClose}>
            <Icon.Cross size={4} />
          </Button>
        </Flexbox>
        <Typography color={(t) => t.color.textLight}>
          More description text here.More description text here.
        </Typography>
      </Box>
    );

    return (
      <>
        {cloneElement(child, { ref: mergeRefs([setTriggerElement, triggerElementRef]) })}
        {open && (
          <StyledTooltipPopup
            ref={ref as any}
            label={label}
            position={position}
            triggerElement={triggerElement}
            {...htmlDivProps}
          />
        )}
      </>
    );
  },
);
