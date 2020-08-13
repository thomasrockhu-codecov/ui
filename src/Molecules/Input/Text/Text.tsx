import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props, Variant } from './Text.types';
import { Flexbox, Typography, FormField } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';

const hasError = (error?: Props['error']) => error && error !== '';

const height = css<Pick<Props, 'size'>>`
  height: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const background = css<Pick<Props, 'disabled' | 'variant'>>`
  background-color: ${p =>
    p.disabled && p.variant !== 'quiet'
      ? p.theme.color.disabledBackground
      : p.theme.color.backgroundInput};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${p =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.color.inputBorderHover};
      }
`}
`;

const focusBorderStyles = css`
  &:focus {
    border-color: ${p => p.theme.color.borderActive};
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success' | 'disabled' | 'variant'>>`
  outline: none;
  border: solid;
  border-color: ${p => {
    if (hasError(p.error)) return p.theme.color.inputBorderError;
    if (p.success) return p.theme.color.inputBorderSuccess;
    return p.theme.color.inputBorder;
  }};
  border-width: ${p => (p.variant === 'quiet' ? '0 0 2px 0' : '1px')};
  &:focus {
    border-width: 1px;
  }
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
  ${p =>
    p.disabled && p.variant === 'quiet'
      ? `color: ${p.theme.color.disabledText};
      border-color: ${p.theme.color.disabledBackground};`
      : ''}
`;

export const placeholderNormalizaion = css<Pick<Props, 'variant'>>`
  &::placeholder {
    color: ${p => (p.variant === 'quiet' ? p.theme.color.cta : p.theme.color.label)};
    height: inherit;
    line-height: inherit;
    opacity: 1;
  }
`;

const Input = styled(NormalizedElements.Input).attrs(p => ({ type: p.type || 'text' }))<
  Partial<Props>
>`
  border: 0;
  width: 100%;
  padding: ${p => p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 2)}px;
  ${p =>
    p.variant === 'quiet'
      ? `&:focus {
      padding: 0 0 0 ${p.theme.spacing.unit(2)}px;
    }`
      : ''}
  margin: 0;
  line-height: inherit;
  box-sizing: border-box;
  ${p =>
    p.variant === 'quiet' ? `color: ${p.theme.color.cta}; font-size: 28px; font-weight: bold;` : ''}
  ${height}
  ${borderStyles}
  ${background}
  ${placeholderNormalizaion}
  ${p => (p.leftAddon ? `padding-left: ${p.theme.spacing.unit(8)}px;` : '')}
  ${p =>
    p.rightAddon
      ? `padding-right: ${p.theme.spacing.unit(10)}px;` // compensate for right paddings
      : ''}
  `;

const Wrapper = styled.div<{ variant?: Variant }>`
  position: relative;
  padding: ${p => p.theme.spacing.unit(p.variant === 'quiet' ? 1 : 0)}px 0;
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right'; variant?: Variant }>`
  width: ${p => p.theme.spacing.unit(8)}px;
  top: 0;
  height: 100%;
  padding-left: ${p => p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 1)}px;
  padding-right: ${p => p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 1)}px;
  position: absolute;
  ${p => (p.position === 'left' ? 'left: 0;' : '')}
  ${p =>
    p.position === 'right'
      ? `right: ${p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 1)}px;`
      : ''}
`;

const components = {
  Input,
  AddonBox,
};

const getAriaProps = R.pickBy((val, key) => key.startsWith('aria-'));
const getDataProps = R.pickBy((val, key) => key.startsWith('data-'));

const TextComponent = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    error,
    id,
    leftAddon,
    maxLength,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    placeholder,
    required,
    rightAddon,
    variant = 'normal',
    size,
    success,
    value,
    visuallyEmphasiseRequired,
    type,
  } = props;

  return (
    <FormField
      {...R.pick(
        [
          'error',
          'extraInfo',
          'hideLabel',
          'label',
          'labelTooltip',
          'className',
          'width',
          'disabled',
        ],
        props,
      )}
      required={visuallyEmphasiseRequired}
    >
      <Typography type="secondary" color={t => t.color.text}>
        <Wrapper>
          <Input
            {...{
              autoComplete,
              autoFocus,
              defaultValue,
              disabled,
              error,
              id,
              leftAddon,
              maxLength,
              name,
              onBlur,
              onChange,
              onClick,
              onFocus,
              onKeyDown,
              onKeyPress,
              onKeyUp,
              placeholder,
              required,
              rightAddon,
              variant,
              size,
              success,
              value,
              type,
              ref,
            }}
            {...getAriaProps(props)}
            {...getDataProps(props)}
            {...(hasError(error) ? { 'aria-invalid': true } : {})}
          />
          {leftAddon && (
            <AddonBox container justifyContent="center" alignItems="center" position="left">
              {leftAddon}
            </AddonBox>
          )}
          {rightAddon && (
            <AddonBox
              container
              variant={variant}
              justifyContent={variant === 'quiet' ? 'flex-end' : 'center'}
              alignItems="center"
              position="right"
            >
              {rightAddon}
            </AddonBox>
          )}
        </Wrapper>
      </Typography>
    </FormField>
  );
});

export const Text: typeof TextComponent & { components?: typeof components } = TextComponent;
Text.components = components;
