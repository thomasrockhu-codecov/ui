import React from 'react';
import styled from 'styled-components';
import { FormLabel, Icon, Flexbox, Typography } from '../../..';
import { CheckboxComponent } from './Checkbox.types';

const CHECKBOX_SIZE = 5;

const StyledFormLabel = styled(FormLabel)`
  position: relative;
`;

const CheckmarkBox = styled(Flexbox)`
  width: ${p => p.theme.spacing.unit(CHECKBOX_SIZE)}px;
  height: ${p => p.theme.spacing.unit(CHECKBOX_SIZE)}px;
  border: 1px solid ${p => p.theme.color.inputBorder};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${CheckmarkBox} {
    border-color: ${p => p.theme.color.cta};
    background: ${p => p.theme.color.cta};
  }

  &[disabled] + ${CheckmarkBox} {
    border-color: ${p => p.theme.color.disabledBackground};
  }

  &:checked[disabled] + ${CheckmarkBox} {
    border-color: ${p => p.theme.color.disabledBackground};
    background: ${p => p.theme.color.disabledBackground};
  }

  &:focus + ${CheckmarkBox} {
    border-color: ${p => p.theme.color.cta};
  }

  &:checked:focus + ${CheckmarkBox} {
    outline: 5px auto ${p => p.theme.color.cta};
  }
`;

const Label = styled(Typography)`
  padding-left: ${p => p.theme.spacing.unit(2)}px;
`;

const Checkbox: CheckboxComponent = props => {
  const {
    autoFocus,
    className,
    checked,
    defaultChecked,
    disabled,
    label,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    value,
  } = props;

  return (
    <StyledFormLabel className={className}>
      <Flexbox container>
        <Input
          {...{
            type: 'checkbox',
            autoFocus,
            checked,
            defaultChecked,
            disabled,
            name,
            onBlur,
            onChange,
            onClick,
            onFocus,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            value,
          }}
        />
        <CheckmarkBox container alignItems="center" justifyContent="center">
          <Icon.CheckMark size={3} color={t => t.color.backgroundInput} />
        </CheckmarkBox>
        <Label type="secondary" color={t => (disabled ? t.color.disabledText : t.color.text)}>
          {label}
        </Label>
      </Flexbox>
    </StyledFormLabel>
  );
};

export default Checkbox;
