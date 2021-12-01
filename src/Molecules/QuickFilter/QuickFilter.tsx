import React, { useState } from 'react';
import Color from 'color';
import styled, { css } from 'styled-components';

import { Flexbox, Typography } from '../..';
import { isBoolean } from '../../common/utils';
import { Props } from './QuickFilter.types';

const StyledTypography = styled(Typography).withConfig({
  shouldForwardProp: (prop) => !['inheritColor', 'selected'].includes(prop),
})<{
  inheritColor: boolean;
  selected: boolean;
}>`
  ${(p) => p.selected && `color: ${p.theme.color.cta};`};
  ${(p) => p.inheritColor && `color: inherit;`};
`;

const StyledInput = styled.input`
  opacity: 0;
  pointer-events: none;
  color: inherit;
  position: absolute;
  ${(p) => `top: ${p.theme.spacing.unit(1)}px`};
`;

const outlineStyles = css`
  ${(p) => `outline: 2px solid ${p.theme.color.cta}`};
  outline-offset: -2px;
  vertical-align: top;
`;

const overlayStyles = css`
  ${(p) => `background: ${Color(p.theme.color.cta).alpha(0.1).string()}`};
  /* ${outlineStyles} */
`;

const StyledDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !['disabled', 'selected'].includes(prop),
})<{
  disabled: boolean;
  selected: boolean;
}>`
  box-sizing: border-box;
  display: inline-block;
  border-radius: ${(p) => p.theme.spacing.unit(4)}px;

  ${(p) => `
    cursor: ${p.disabled ? 'not-allowed' : 'pointer'};
    color: ${p.theme.color.text};
    ${p.selected && `color: ${p.theme.color.cta};`};
    ${p.disabled && `color: ${p.theme.color.disabledText};`};
    background: ${p.disabled ? p.theme.color.disabledBackground : p.theme.color.card};
  `}

  /* ${(p) => !p.disabled && p.selected && overlayStyles}; */

  &:hover {
    ${(p) => !p.disabled && overlayStyles};
  }
`;

const StyledLabel = styled.label`
  cursor: inherit;

  &:focus-within {
    ${StyledDiv} {
      /* ${outlineStyles} */
    }
  }
`;

const StyledDivLabelWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hasLabel'].includes(prop),
})<{
  hasLabel: boolean;
}>`
  ${(p) => `
    text-align: ${p.hasLabel ? 'left' : 'center'};
    padding: ${p.theme.spacing.unit(1)}px ${p.theme.spacing.unit(3)}px ;
  `}
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

  const changeHandler = (val: boolean) => {
    if (typeof onChange === 'function') onChange(val);
    if (!isControlled) setSelectedInternal(val);
  };

  return (
    <StyledLabel>
      <StyledDiv disabled={disabled} selected={selected}>
        <StyledInput
          type="checkbox"
          disabled={disabled}
          checked={selected}
          value={value}
          onChange={() => changeHandler(!selected)}
        />

        <StyledDivLabelWrapper hasLabel={Boolean(label)}>
          <Flexbox container direction="row" gutter={1} alignItems="center">
            {Boolean(icon) && <Flexbox item>{icon}</Flexbox>}

            <Flexbox item alignSelf="baseline">
              <StyledTypography inheritColor={disabled} type="secondary">
                {label}
              </StyledTypography>
            </Flexbox>
          </Flexbox>
        </StyledDivLabelWrapper>
      </StyledDiv>
    </StyledLabel>
  );
};
