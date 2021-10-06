import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Flexbox, FormField, FormLabel, Typography } from '../../..';
import { InternalInputProps, Props, RadioComponent } from './Radio.types';
import { isString } from '../../../common/utils';

const RADIO_SIZE = 5;
const checkIfHasError = (error?: Props['error']) => isString(error) && error !== '';

const CleanInput = React.forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => (
  <input ref={ref} {...R.omit(['hasError'], props)} />
));

const Circle = styled.div`
  width: ${(p) => p.theme.spacing.unit(RADIO_SIZE) - 2}px;
  height: ${(p) => p.theme.spacing.unit(RADIO_SIZE) - 2}px;
  border: 1px solid ${(p) => p.theme.color.inputBorder};
  background-color: ${(p) => p.theme.color.inputBackground};
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    width: 100%;
    height: 100%;
    padding: 2px;
  }

  &::after {
    width: ${(p) => p.theme.spacing.unit(RADIO_SIZE - 2) - 1}px;
    height: ${(p) => p.theme.spacing.unit(RADIO_SIZE - 2) - 1}px;
  }
`;

const StyledFormLabel = styled(FormLabel)`
  position: relative;

  &:hover ${Circle} {
    border-color: ${(p) => p.theme.color.inputBorderHover};
  }
`;

const Input = styled(CleanInput).attrs(() => ({ type: 'radio' }))<InternalInputProps>`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${Circle} {
    &::after {
      background: ${(p) => p.theme.color.cta};
    }
  }

  &[disabled] + ${Circle} {
    border-color: ${(p) => p.theme.color.disabledBackground};
  }

  &:checked[disabled] + ${Circle} {
    border-color: ${(p) => p.theme.color.disabledBackground};
    &::after {
      background: ${(p) => p.theme.color.disabledBackground};
    }
  }

  ${(p) =>
    p.hasError
      ? `
    & + ${Circle} {
      &::before {
        border: 1px solid ${p.theme.color.inputBorderError};
      }
    }`
      : ''}

  &:focus + ${Circle} {
    &::before {
      border: 1px solid ${(p) => p.theme.color.cta};
    }
  }
`;

const Label = styled(Typography)`
  padding-left: ${(p) => p.theme.spacing.unit(2)}px;
  white-space: initial;
`;

const Radio: RadioComponent = (props) => {
  const {
    autoFocus,
    checked,
    className,
    defaultChecked,
    disabled,
    error,
    hasError,
    id,
    label,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    required,
    value,
    visuallyEmphasiseRequired,
    width,
    noRadioCircle,
    children,
  } = props;

  return (
    <FormField {...{ error }} width={width || 'auto'}>
      <StyledFormLabel className={className}>
        <Flexbox container alignItems="center">
          <Input
            {...{
              autoFocus,
              checked,
              defaultChecked,
              disabled,
              hasError: hasError || checkIfHasError(error),
              id,
              name,
              onBlur,
              onChange,
              onClick,
              onFocus,
              onKeyDown,
              onKeyPress,
              onKeyUp,
              required,
              value,
            }}
          />
          {!noRadioCircle && <Circle />}
          {children || (
            <Label type="secondary" color={(t) => (disabled ? t.color.disabledText : t.color.text)}>
              {visuallyEmphasiseRequired ? `${label} *` : label}
            </Label>
          )}
        </Flexbox>
      </StyledFormLabel>
    </FormField>
  );
};

export default Radio;
