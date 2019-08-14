import React from 'react';
import R from 'ramda';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Props } from './Text.types';
import { Typography, Flexbox, VisuallyHidden } from '../../..';

const LINE_HEIGHT_INFO_BELOW = 17;
const hasError = (error?: Props['error']) => error && error !== '';

const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const height = css<Pick<Props, 'size'>>`
  height: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const inputBackgroundColor = css<Pick<Props, 'disabled'>>`
  background-color: ${p =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.backgroundInput};
`;

const placeholderNormalizaion = css<{ sizeProp: Props['size'] }>`
  &::placeholder {
    /* fixes safari placeholder vertical positioning */
    /* change if typography changes */
    line-height: 17px;
  }

  :-ms-input-placeholder {
    /* fixes IE11 placeholder vertical positioning and color */
    line-height: 1;
    color: ${p => p.theme.color.label};
  }

  &::-moz-placeholder {
    /* fixes firefox placeholder vertical positioning */
    /* change if typography changes */
    line-height: ${p => (p.sizeProp === 's' ? '15' : '22')}px;
  }
`;

const UnstyledInput = styled.input.attrs({ type: 'text' })<
  Partial<Props> & { sizeProp: Props['size'] }
>`
  /* Resetting base rules */
  margin: 0;
  border: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;

  box-sizing: border-box;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
  width: 100%;
  padding: ${p => p.theme.spacing.unit(2)}px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  outline: 0;
  height: 100%;

  ${placeholderNormalizaion}
  ${inputBackgroundColor}
  ${p => (p.leftAddon ? `padding-left: ${p.theme.spacing.unit(8)}px` : '')}
  ${p =>
    p.rightAddon
      ? `padding-right: ${p.theme.spacing.unit(10)}px` // compensate for right paddings
      : ''}
`;

const hoverIfNotDisabled = css<Pick<Props, 'disabled'>>`
  ${p =>
    p.disabled
      ? ''
      : `
      &:hover:not(:focus-within) {
        border-color: ${p.theme.color.inputBorderHover};
      }
`}
`;

const focusBorderColor = css<Pick<Props, 'error'>>`
  &:focus-within {
    border-color: ${p =>
      hasError(p.error) ? p.theme.color.inputBorderError : p.theme.color.borderActive};
  }
  &.focus-within {
    border-color: ${p =>
      hasError(p.error) ? p.theme.color.inputBorderError : p.theme.color.borderActive};
  }
`;

const outerFlexboxBorderColor = css<Pick<Props, 'error' | 'success'>>`
  border: 1px solid
    ${p => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  ${focusBorderColor}
  ${hoverIfNotDisabled}
`;

const CleanFlexbox = (props: any) => <Flexbox {...R.omit(['error', 'disabled'], props)} />;
const InputWrapperFlexbox = styled(CleanFlexbox)`
  position: relative;
  ${height}
  box-sizing: border-box;

  ${outerFlexboxBorderColor}

  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 ${p => p.theme.color.shadowInput};
  font: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;

  &::placeholder {
    /* Need to do color manually */
    color: ${p => p.theme.color.label};
  }
`;

const HidableTypography = styled(Typography)<{ hidden: boolean }>`
  ${p => (p.hidden ? visuallyHidden : '')}
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right' }>`
  width: ${p => p.theme.spacing.unit(8)}px;
  top: 0;
  height: 100%;
  padding-left: ${p => p.theme.spacing.unit(1)}px;
  padding-right: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  ${p => (p.position === 'left' ? 'left: 0;' : '')}
  ${p => (p.position === 'right' ? `right: ${p.theme.spacing.unit(1)}px;` : '')}
`;

const DensedTypography = styled(Typography)`
  line-height: ${LINE_HEIGHT_INFO_BELOW}px;
  display: inline-block;
`;

const InlineFlexbox = styled(Flexbox)`
  display: flex;
  width: 100%;
`;

const BottomWrapper = styled(motion.span)`
  width: 100%;
`;

const Wrapper = styled.div<{ width?: string | number }>`
  ${p => (p.width ? `width: ${p.width};` : 'width: 200px;')}
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: inline-block;
`;

const components = {
  InlineFlexbox,
  HidableTypography,
  InputWrapperFlexbox,
  UnstyledInput,
  DensedTypography,
  AddonBox,
  BottomWrapper,
};

export const Text: React.FC<Props> & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomText = styled(Text)`
   *  ${UnstyledInput} {
   *    color: pink;
   * }
   * `
   * */
  components: typeof components;
} = ({
  className,
  disabled,
  error,
  width,
  hideLabel,
  label,
  leftAddon,
  placeholder,
  rightAddon,
  success,
  size,
  defaultValue,
  value,
  extraInfo,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onKeyDown,
  onKeyUp,
  onKeyPress,
}) => {
  /* eslint-disable jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
  return (
    <Wrapper width={width} className={className}>
      <label>
        <InlineFlexbox container direction="column">
          <HidableTypography
            hidden={Boolean(hideLabel)}
            type="secondary"
            color={t => t.color.label}
          >
            {label}
          </HidableTypography>
          <Flexbox item alignSelf="stretch">
            <Typography type="secondary" color={t => t.color.text} as="div">
              <InputWrapperFlexbox
                container
                alignItems="center"
                {...{ size, error, success, disabled }}
              >
                <UnstyledInput
                  {...{
                    sizeProp: size,
                    placeholder,
                    error,
                    success,
                    leftAddon,
                    rightAddon,
                    value,
                    defaultValue,
                    disabled,
                    onChange,
                    onFocus,
                    onClick,
                    onBlur,
                    onKeyDown,
                    onKeyUp,
                    onKeyPress,
                  }}
                  {...(hasError(error) ? { 'aria-invalid': true } : {})}
                />
                {leftAddon && (
                  <AddonBox container justifyContent="center" alignItems="center" position="left">
                    {leftAddon}
                  </AddonBox>
                )}
                {rightAddon && (
                  <AddonBox container justifyContent="center" alignItems="center" position="right">
                    {rightAddon}
                  </AddonBox>
                )}
              </InputWrapperFlexbox>
            </Typography>
          </Flexbox>
        </InlineFlexbox>
      </label>
      <AnimatePresence>
        {hasError(error) ? (
          <BottomWrapper
            size={size}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            aria-live="assertive"
            // TODO: Check this one @manman
            // @ts-ignore
            aria-relevant="additions removals"
          >
            <DensedTypography type="tertiary" color={t => t.color.negative}>
              <VisuallyHidden>Error: </VisuallyHidden>
              {error}
            </DensedTypography>
          </BottomWrapper>
        ) : (
          extraInfo && (
            <BottomWrapper
              size={size}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              aria-live="assertive"
              // TODO: Check this one @manman
              // @ts-ignore
              aria-relevant="additions removals"
            >
              <DensedTypography type="tertiary" color={t => t.color.label}>
                {extraInfo}
              </DensedTypography>
            </BottomWrapper>
          )
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
Text.components = components;
