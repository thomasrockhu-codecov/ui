import React, { cloneElement, forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { isElement, mergeRefs } from '../../common/utils';
import { Box, Button, Flexbox, Icon, Typography } from '../..';
import { TooltipPopup } from '../Tooltip/TooltipPopup';
import { Props as PersistentTooltipProps } from './PersistentTooltip.types';

const styledTooltipArrow = (position: PersistentTooltipProps['position'], color: string) => {
  switch (position) {
    case 'bottom':
      return `
        &::before {
          border-bottom-color: ${color};
        }

        &::after {
          border-bottom-color: ${color};
        }
      `;
    case 'top':
      return `
        &::before {
          border-top-color: ${color};
        }

        &::after {
          border-top-color: ${color};
        }
      `;
    case 'right':
      return `
        &::before {
          border-right-color: ${color};
        }

        &::after {
          border-right-color: ${color};
        }
      `;
    case 'left':
      return `
        &::before {
          border-left-color: ${color};
        }

        &::after {
          border-left-color: ${color};
        }
      `;
    default:
      return '';
  }
};

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
    ${(p) => styledTooltipArrow(p.position, p.theme.color.backgroundDark)}
  }
`;

const StyledButton = styled(Button)`
  margin-left: ${(p) => p.theme.spacing.unit(5)}px;
`;

const StyledCrossIcon = styled(Icon.CrossMedium)``;

const components = {
  TooltipContent: TooltipPopup.components.TooltipContent,
  TooltipArrow: TooltipPopup.components.TooltipArrow,
  CloseButtonIcon: StyledCrossIcon,
};

export const PersistentTooltip = (forwardRef<HTMLDivElement, PersistentTooltipProps>(
  (
    {
      children,
      position = 'bottom',
      open,
      onClose,
      title: titleProp,
      description: descriptionProp,
      closeButtonTitle,
      maxWidth,
      ...htmlDivProps
    },
    ref,
  ) => {
    const child = React.Children.only(children) as any;
    const [triggerElement, setTriggerElement] = useState(undefined);
    const triggerElementRef = useRef(null);

    const title = isElement(titleProp) ? (
      titleProp
    ) : (
      <Typography type="primary" weight="bold" color={(t) => t.color.textLight}>
        {titleProp}
      </Typography>
    );

    const description = isElement(descriptionProp) ? (
      descriptionProp
    ) : (
      <Typography type="secondary" color={(t) => t.color.textLight}>
        {descriptionProp}
      </Typography>
    );

    const label = (
      <Box>
        <Flexbox container justifyContent="space-between">
          {title}
          <StyledButton onClick={onClose} variant="neutral">
            <StyledCrossIcon size={4} color={(t) => t.color.textLight} title={closeButtonTitle} />
          </StyledButton>
        </Flexbox>
        {description}
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
            maxWidth={maxWidth}
            {...htmlDivProps}
          />
        )}
      </>
    );
  },
) as any) as React.ForwardRefExoticComponent<
  PersistentTooltipProps & React.RefAttributes<HTMLDivElement>
> & {
  components: typeof components;
};

PersistentTooltip.components = components;
