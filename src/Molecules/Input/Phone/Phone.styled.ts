import styled, { css } from 'styled-components';
import { Props, Variant } from './Phone.types';
import { Box, Flexbox, Typography } from '../../..';
import { Select } from '../Select';
import NormalizedElements from '../../../common/NormalizedElements';

const hasError = (error?: Props['error']) => error && error !== '';

const background = css<Pick<Props, 'disabled' | 'variant'>>`
  background-color: ${(p) =>
    p.disabled && p.variant !== 'quiet'
      ? p.theme.color.disabledBackground
      : p.theme.color.backgroundInput};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${(p) =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.color.inputBorderHover};
      }
`}
`;

const borderStyles = css<Pick<Props, 'error' | 'success' | 'disabled' | 'variant'>>`
  border: solid;
  border-color: ${(p) => {
    if (hasError(p.error)) return p.theme.color.inputBorderError;
    if (p.success) return p.theme.color.inputBorderSuccess;
    return p.theme.color.inputBorder;
  }};
  border-width: ${(p) => (p.variant === 'quiet' ? '0 0 2px 0' : '1px')};
  &:focus {
    border-width: 1px;
  }
  position: relative;
  ${hoverBorderStyles}
  ${(p) =>
    p.disabled && p.variant === 'quiet' ? `border-color: ${p.theme.color.disabledBackground};` : ''}
`;

export const placeholderNormalization = css<Pick<Props, 'variant' | 'disabled'>>`
  &::placeholder {
    color: ${(p) => (p.variant === 'quiet' ? p.theme.color.cta : p.theme.color.label)};
    line-height: inherit;
    opacity: 1;
  }
  ${(p) =>
    p.variant === 'quiet' ? `&:focus::placeholder { color: ${p.theme.color.disabledText}}` : ''};
  &:disabled::placeholder {
    color: ${(p) => p.theme.color.disabledText};
  }
`;

/**
 * TODO: Select is undefined when running test:
 * src/Molecules/Input/Select/__tests__/Select.test.tsx
 *
 *    Cannot create styled-component for component: undefined.
 *    > 76 | export const StyledSelect = styled(Select)`
 *                                       ^
 */
export const StyledSelect = Select
  ? styled(Select)`
      max-width: 50px;
      & * {
        border: none;
      }
    `
  : Select;

export const StyledCountryCode = styled(Flexbox)<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.disabledBackground : theme.color.card};
`;

export const StyledInput = styled(NormalizedElements.Input).attrs((p) => ({
  type: p.type || 'text',
}))<Partial<Props>>`
  border: 0;
  outline: none;
  color: ${({ theme }) => theme.color.text};
  width: 100%;
  height: 100%;
  padding: 0px ${(p) => p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 2)}px;
  margin: 0;
  box-sizing: border-box;
  line-height: inherit;
  ${background}
  ${placeholderNormalization}
  ${(p) =>
    p.variant === 'quiet'
      ? `color: ${p.theme.color.cta}; 
         &:disabled {
           color: ${p.theme.color.disabledText};
         }
         font-size: 28px; 
         font-weight: bold;
         &:focus {
           padding-left: ${p.theme.spacing.unit(2)}px;
           padding-right: ${p.theme.spacing.unit(0)}px;
         }`
      : ''}

    ${(p) =>
    p.type === 'search' &&
    ` 
    &[type="search"] {
      -webkit-appearance: textfield;
    }
    `}
    ${(p) =>
    p.disabled &&
    `
      cursor: not-allowed;
      `}
`;

export const StyledWrapper = styled(Flexbox)<{
  disabled?: boolean;
  focused?: boolean;
  variant?: Variant;
}>`
  position: relative;
  height: ${(p) => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
  padding: ${(p) => p.theme.spacing.unit(p.variant === 'quiet' ? 1 : 0)}px 0;
  background: ${(p) => (p.disabled ? p.theme.color.disabledBackground : p.theme.color.card)};
  ${borderStyles}
  ${({ focused, theme }) => (focused ? `border-color: ${theme.color.borderActive};` : '')}
`;

export const StyledBox = styled(Box)<{ focused?: boolean; isKeyboardNavigation?: boolean }>`
  cursor: pointer;
  background: ${(p) => (p.focused ? p.theme.color.background : p.theme.color.card)};
  ${(p) =>
    !p.isKeyboardNavigation
      ? `
&: hover {
  background: ${p.theme.color.background};
  }
`
      : ''}
`;

export const StyledTypography = styled(Typography)`
  width: inherit;
`;
