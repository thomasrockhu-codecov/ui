import React, { useState } from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, VisuallyHidden } from '../..';
import { isBoolean, isElement } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import { SwitchToggleProps } from './Switch.types';

const TOGGLE_HEIGHT = 6;
const KNOB_SIZE = TOGGLE_HEIGHT;
const KNOB_WIDTH = 12;
const TRACK_HEIGHT = TOGGLE_HEIGHT + 1;
const TRACK_WIDTH = 23;

const Label = styled.label`
  display: inline-block;
`;

const Knob = styled.span<Pick<SwitchToggleProps, 'knobWidth'>>`
  background: white;
  display: block;
  height: ${(p) => p.theme.spacing.unit(KNOB_SIZE)}px;
  width: ${(p) => {
    if (p.knobWidth) {
      return p.theme.spacing.unit(p.knobWidth);
    }
    return p.theme.spacing.unit(KNOB_WIDTH);
  }}px;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -${(p) => p.theme.spacing.unit(KNOB_SIZE / 2)}px;
  border-radius: ${(p) => p.theme.spacing.unit(KNOB_SIZE / 2)}px;
  box-sizing: border-box;
  transition: transform 0.2s cubic-bezier(0.18, 0.9, 0.35, 1.15);
  background-color: ${(p) => p.theme.color.bubbleBackground};
  margin-left: 3px;
`;

const Track = styled.span<Pick<SwitchToggleProps, 'trackWidth'>>`
  display: block;
  height: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  width: ${(p) => {
    return p.trackWidth ? p.theme.spacing.unit(p.trackWidth) : p.theme.spacing.unit(TRACK_WIDTH);
  }}px;
  margin: ${(p) => p.theme.spacing.unit((KNOB_SIZE - TRACK_HEIGHT) / 2)}px 0;
  border-radius: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT / 2)}px;
  transition: background-color 0.2s ease-out;
  line-height: ${(p) => p.theme.spacing.unit(TOGGLE_HEIGHT)}px;
  background-color: ${(p) => p.theme.color.orderDepthBackground};
  border: 1px solid ${(p) => p.theme.color.divider};
`;

const ButtonContent = styled.div`
  position: relative; /* IE fix for nudge on click */
`;

const Button = styled(NormalizedElements.Button)<
  Pick<SwitchToggleProps, 'knobWidth' | 'trackWidth'>
>`
  display: block;
  background: none;
  padding: 0;
  border: 0;
  &[aria-checked='true'] {
    ${Knob} {
      transform: translate(
        ${(p) => {
          if (p.knobWidth && p.trackWidth) {
            return p.theme.spacing.unit(p.trackWidth - p.knobWidth - 1);
          }
          return p.theme.spacing.unit(TRACK_WIDTH - KNOB_WIDTH - 1);
        }}px
      );
    }
  }

  &[disabled],
  &[aria-readonly] {
    ${Track} {
      background-color: ${(p) => p.theme.color.disabledBackground};
    }

    ${Knob} {
      border: 1px solid ${(p) => p.theme.color.disabledBackground};
      background-color: ${(p) => p.theme.color.switchReadOnlyKnobBg};
    }
  }

  &[aria-checked='true'][aria-readonly] {
    ${Track} {
      background-color: ${(p) => p.theme.color.switchReadOnlyTrackBg};
    }
  }
`;

const StyledTypography = styled(Typography)<Pick<SwitchToggleProps, 'knobWidth'>>`
  padding-top: 2px;
  width: ${(p) => {
    if (p.knobWidth) {
      return p.theme.spacing.unit(p.knobWidth);
    }
    return p.theme.spacing.unit(KNOB_WIDTH);
  }}px;
`;

export const SwitchToggle: React.FC<SwitchToggleProps> = ({
  className,
  label,
  hiddenLabel,
  valueLeft,
  valueRight,
  disabled,
  onClick,
  checkedInitially = false,
  checked: checkedControlled,
  readOnly,
  knobWidth,
  trackWidth,
}) => {
  const isControlled = isBoolean(checkedControlled);
  const titleNode = isElement(label) ? label : <Typography type="secondary">{label}</Typography>;
  const [checkedInternal, setCheckedInternal] = useState(checkedInitially);
  const checked = isControlled ? checkedControlled : checkedInternal;

  const internalClickHandler = (e: React.MouseEvent) => {
    const nextCheckedState = !checked;

    if (!readOnly) {
      setCheckedInternal(nextCheckedState);
    }

    if (onClick) {
      // setTimout from previous commit for animation reasons
      setTimeout(() => onClick(e, readOnly ? checked : nextCheckedState));
    }
  };

  return (
    <Label>
      <Flexbox container gutter={2} alignItems="center" as="span">
        <Flexbox item as="span">
          {hiddenLabel ? <VisuallyHidden>{titleNode}</VisuallyHidden> : titleNode}
        </Flexbox>
        <Flexbox item as="span">
          <Button
            className={className}
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={isControlled ? onClick : internalClickHandler}
            disabled={disabled}
            aria-readonly={readOnly}
            knobWidth={knobWidth}
            trackWidth={trackWidth}
          >
            <ButtonContent>
              <Knob knobWidth={knobWidth}>
                <Flexbox
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                >
                  <Typography type="primary" color={(p) => p.color.cta}>
                    {checked ? valueRight : valueLeft}
                  </Typography>
                </Flexbox>
              </Knob>
              <Track trackWidth={trackWidth}>
                <Flexbox
                  container
                  item
                  justifyContent="space-between"
                  alignItems="center"
                  alignContent="center"
                >
                  <StyledTypography
                    type="primary"
                    knobWidth={knobWidth}
                    color={(p) => p.color.disabledText}
                  >
                    {valueLeft}
                  </StyledTypography>
                  <StyledTypography
                    type="primary"
                    knobWidth={knobWidth}
                    color={(p) => p.color.disabledText}
                  >
                    {valueRight}
                  </StyledTypography>
                </Flexbox>
              </Track>
            </ButtonContent>
          </Button>
        </Flexbox>
      </Flexbox>
    </Label>
  );
};
