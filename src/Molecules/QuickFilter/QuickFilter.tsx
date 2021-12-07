import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Flexbox, Typography } from '../..';
import { isBoolean, isFunction } from '../../common/utils';

import { Props } from './QuickFilter.types';

const FOCUS_RING_SIZES = 2;

const browsersNativeFocusStyles = css`
  outline: ${FOCUS_RING_SIZES}px solid Highlight;
  outline: ${FOCUS_RING_SIZES}px solid -webkit-focus-ring-color;
`;

const StyledInput = styled.input`
  opacity: 0;
  pointer-events: none;
  position: absolute;
`;

const StyledDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !['disabled', 'selected', 'hasLabel'].includes(prop),
})<{
  disabled: boolean;
  selected: boolean;
  hasLabel: boolean;
}>`
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;

  background: ${(p) => p.theme.color.quickFilterBackground};
  color: ${(p) => p.theme.color.quickFilterText};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) => p.theme.spacing.unit(2)}px;

  ${(p) => p.selected && `color: ${p.theme.color.quickFilterSelectedText}`};
  ${(p) => p.disabled && `color: ${p.theme.color.disabledText}`};

  ${(p) => p.selected && `background: ${p.theme.color.quickFilterSelectedBackground}`};
  ${(p) => p.disabled && `background: ${p.theme.color.disabledBackground}`};

  ${(p) => p.hasLabel && `padding: ${p.theme.spacing.unit(1)}px ${p.theme.spacing.unit(3)}px`};
  ${(p) => p.hasLabel && `border-radius: ${p.theme.spacing.unit(4)}px`};

  &:hover {
    ${(p) => !p.disabled && `color: ${p.theme.color.quickFilterSelectedText}`};
  }
`;

const StyledLabel = styled.label`
  cursor: inherit;

  &:focus-within {
    ${StyledDiv} {
      ${browsersNativeFocusStyles}
    }
  }
`;

const StyledFlexbox = styled(Flexbox)`
  & > * {
    color: inherit;
  }
`;

export const QuickFilter: React.FC<Props> = ({
  label,
  onChange = () => {},
  value = '',
  icon = null,
  disabled = false,
  selected: controlledSelected,
  selectedInitially = false,
}) => {
  const [selectedInternal, setSelectedInternal] = useState(selectedInitially);
  const isControlled = isBoolean(controlledSelected);
  const selected = Boolean(isControlled ? controlledSelected : selectedInternal);
  const hasLabel = Boolean(label);
  const hasIcon = Boolean(icon);

  const changeHandler = (val: boolean) => {
    if (isFunction(onChange)) onChange(val);
    if (!isControlled) setSelectedInternal(val);
  };

  return (
    <StyledLabel>
      <StyledDiv disabled={disabled} selected={selected} hasLabel={hasLabel}>
        <StyledInput
          checked={selected}
          disabled={disabled}
          onChange={() => changeHandler(!selected)}
          type="checkbox"
          value={value}
        />

        <Flexbox container direction="row" gutter={1} alignItems="center">
          {hasIcon && <StyledFlexbox item>{icon}</StyledFlexbox>}

          {hasLabel && (
            <Flexbox item alignSelf="baseline">
              <Typography color="inherit" type="secondary" weight="bold">
                {label}
              </Typography>
            </Flexbox>
          )}
        </Flexbox>
      </StyledDiv>
    </StyledLabel>
  );
};
