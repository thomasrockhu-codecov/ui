import React, { useState } from 'react';
import Color from 'color';
import styled from 'styled-components';

import { Flexbox, Typography } from '../..';
import { isBoolean } from '../../common/utils';
import { Props, Variant } from './QuickFilter.types';
import { VARIANT } from './constants';

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
  variant: Variant;
}>`
  background: ${(p) => p.theme.color.card};
  border-radius: 50%;
  box-sizing: border-box;
  color: ${(p) => p.theme.color.text};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  padding: ${(p) => p.theme.spacing.unit(p.variant === VARIANT.SMALL ? 1.5 : 2)}px;

  ${(p) => p.selected && `color: ${p.theme.color.cta};`};
  ${(p) => p.disabled && `color: ${p.theme.color.disabledText};`};

  ${(p) => p.selected && `background: ${Color(p.theme.color.cta).alpha(0.1).string()};`};
  ${(p) => p.disabled && `background: ${p.theme.color.disabledBackground};`};

  ${(p) => p.hasLabel && `padding: ${p.theme.spacing.unit(1)}px ${p.theme.spacing.unit(3)}px;`}
  ${(p) => p.hasLabel && `border-radius: ${p.theme.spacing.unit(4)}px;`}

  &:hover {
    color: ${(p) => !p.disabled && p.theme.color.cta};
  }
`;

const StyledLabel = styled.label`
  cursor: inherit;

  &:focus-within {
    ${StyledDiv} {
      color: ${(p) => p.theme.color.cta};
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
  variant = VARIANT.SMALL,
  icon = null,
  disabled = false,
  selected: controlledSelected,
  selectedInitially = false,
}) => {
  const [selectedInternal, setSelectedInternal] = useState(selectedInitially);
  const isControlled = isBoolean(controlledSelected);
  const selected = (isControlled ? controlledSelected : selectedInternal) as boolean;
  const hasLabel = Boolean(label);
  const hasIcon = Boolean(icon);

  const changeHandler = (val: boolean) => {
    if (typeof onChange === 'function') onChange(val);
    if (!isControlled) setSelectedInternal(val);
  };

  return (
    <StyledLabel>
      <StyledDiv disabled={disabled} selected={selected} hasLabel={hasLabel} variant={variant}>
        <StyledInput
          type="checkbox"
          disabled={disabled}
          checked={selected}
          value={value}
          onChange={() => changeHandler(!selected)}
        />

        <Flexbox container direction="row" gutter={1} alignItems="center">
          {hasIcon && <StyledFlexbox item>{icon}</StyledFlexbox>}

          {hasLabel && (
            <Flexbox item alignSelf="baseline">
              <Typography color="inherit" type="secondary">
                {label}
              </Typography>
            </Flexbox>
          )}
        </Flexbox>
      </StyledDiv>
    </StyledLabel>
  );
};
