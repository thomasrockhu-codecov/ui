import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { FormLabel, Icon, Flexbox, Typography } from '../../..';
import { CheckboxComponent, Props, InternalInputProps } from './Checkbox.types';
import { isString } from '../../../common/utils';

const CHECKBOX_SIZE = 5;
const hasError = (error?: Props['error']) => isString(error) && error !== '';

const CleanInput = React.forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} {...R.omit(['hasError'], props)} />
));

const CheckmarkBox = styled(Flexbox)`
  width: ${p => p.theme.spacing.unit(CHECKBOX_SIZE)}px;
  height: ${p => p.theme.spacing.unit(CHECKBOX_SIZE)}px;
  border: 1px solid ${p => p.theme.color.inputBorder};
  position: relative;

  &::before {
    content: '';
    display: block;
    padding: 2px;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const StyledFormLabel = styled(FormLabel)`
  position: relative;

  &:hover ${CheckmarkBox} {
    border-color: ${p => p.theme.color.inputBorderHover};
  }
`;

const Input = styled(CleanInput).attrs({ type: 'checkbox' })<InternalInputProps>`
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

  ${p =>
    p.hasError
      ? `
    & + ${CheckmarkBox} {
      &::before {
        border: 1px solid ${p.theme.color.inputBorderError};
      }
    }`
      : ''}

  &:focus + ${CheckmarkBox} {
    &::before {
      border: 1px solid ${p => p.theme.color.cta};
    }
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
    error,
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
            autoFocus,
            checked,
            defaultChecked,
            disabled,
            hasError: hasError(error),
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
