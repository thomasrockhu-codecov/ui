import React, { useState } from 'react';
import Color from 'color';
import styled from 'styled-components';

import { Flexbox, Typography } from '../..';
import { isBoolean } from '../../common/utils';
import { Props } from './QuickFilter.types';

const StyledInput = styled.input`
  opacity: 0;
  pointer-events: none;
  color: inherit;
  position: absolute;
  ${(p) => `top: ${p.theme.spacing.unit(1)}px;`};
`;

const StyledDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !['disabled', 'selected', 'hasLabel'].includes(prop),
})<{
  disabled: boolean;
  selected: boolean;
  hasLabel: boolean;
}>`
  box-sizing: border-box;
  display: inline-block;
  ${(p) => (p.hasLabel ? `border-radius: ${p.theme.spacing.unit(4)}px;` : `border-radius: 50%;`)};

  ${(p) =>
    p.hasLabel
      ? `padding: ${p.theme.spacing.unit(1)}px ${p.theme.spacing.unit(3)}px;`
      : `padding: ${p.theme.spacing.unit(2)}px;`};

  ${(p) => `
    cursor: ${p.disabled ? 'not-allowed' : 'pointer'};
    color: ${p.theme.color.text};
    ${p.selected && `color: ${p.theme.color.cta};`};
    ${p.disabled && `color: ${p.theme.color.disabledText};`};

    background:  ${p.theme.color.card};
    ${p.selected && `background: ${Color(p.theme.color.cta).alpha(0.1).string()};`};
    ${p.disabled && `background: ${p.theme.color.disabledBackground};`};
  `};

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
  icon = null,
  disabled = false,
  selected: controlledSelected,
  selectedInitially = false,
}) => {
  const [selectedInternal, setSelectedInternal] = useState(selectedInitially);
  const isControlled = isBoolean(controlledSelected);
  const selected = (isControlled ? controlledSelected : selectedInternal) as boolean;
  const hasLabel = Boolean(label);

  const changeHandler = (val: boolean) => {
    if (typeof onChange === 'function') onChange(val);
    if (!isControlled) setSelectedInternal(val);
  };

  return (
    <StyledLabel>
      <StyledDiv disabled={disabled} selected={selected} hasLabel={hasLabel}>
        <StyledInput
          type="checkbox"
          disabled={disabled}
          checked={selected}
          value={value}
          onChange={() => changeHandler(!selected)}
        />

        <Flexbox container direction="row" gutter={1} alignItems="center">
          {Boolean(icon) && <StyledFlexbox item>{icon}</StyledFlexbox>}

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
