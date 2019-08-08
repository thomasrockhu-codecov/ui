import React from 'react';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Props, PropsWithTheme } from './Text.types';
import { Typography, Flexbox, VisuallyHidden } from '../..';

const LINE_HEIGHT_INFO_BELOW = 17;
const getHeight = (props: {
  size: PropsWithTheme['size'];
  theme: PropsWithTheme['theme'];
}): number => (props.size === 's' ? props.theme.spacing.unit(8) : props.theme.spacing.unit(10));

const getBorderColor = (p: PropsWithTheme & { isFocused: boolean }) => {
  if (p.error && p.error !== '') return p.theme.color.inputBorderError;
  if (p.success) return p.theme.color.inputBorderSuccess;
  return p.theme.color.inputBorder;
};
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
const UnstyledInput = styled.input.attrs({ type: 'text' })`
  /* Resetting base rules */
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  box-sizing: border-box;
  font: inherit;
  font-size: inherit;
  color: inherit;
  width: 100%;
  padding: ${p => p.theme.spacing.unit(2)}px;
  position: absolute;
  top: -0.5px;
  left: 0;
  right: 0;
  bottom: 0;
  outline: 0;
  min-width: ${p => p.theme.spacing.unit(40)}px;
  height: 100%;
  ${p => (p.leftAddon ? `padding-left: ${p.theme.spacing.unit(8)}px` : '')}
  ${p =>
    p.rightAddon
      ? `padding-right: ${p.theme.spacing.unit(10)}px` // compensate for right paddings
      : ''}
`;
const StyledOuterFlexbox = styled(Flexbox)`
  position: relative;
  height: ${(p: PropsWithTheme) => getHeight(p)}px;
  ${p => (p.noBottomMargin ? '' : `margin-bottom: ${LINE_HEIGHT_INFO_BELOW}px;`)}
  box-sizing: border-box;
  border: 1px solid ${(p: PropsWithTheme & { isFocused: boolean }) => getBorderColor(p)};
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 ${p => p.theme.color.shadowInput};
  font: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  min-width: ${p => p.theme.spacing.unit(40)}px;
  &:focus-within {
    border-color: ${p => p.theme.color.borderActive};
  }
  &.focus-within {
    border-color: ${p => p.theme.color.borderActive};
  }

  &:hover:not(:focus-within) {
    border-color: ${p => p.theme.color.inputBorderHover};
  }
  &::placeholder {
    /* Need to do color manually */
    color: ${p => p.theme.color.label};
  }
`;
const HidableTypography = styled(Typography)<{ hidden: boolean }>`
  ${p => (p.hidden ? visuallyHidden : '')}
`;

const AddonBox = styled(Flexbox)`
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
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Wrapper = styled(Flexbox)`
  display: inline-flex;
  align-items: start;
  ${p => (p.fullWidth ? 'width: 100%' : '')}
`;
const BottomWrapper = styled(motion.span)<{ size: PropsWithTheme['size'] }>`
  position: absolute;
  line-height: 0;
  max-height: ${LINE_HEIGHT_INFO_BELOW}px;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: ${p => getHeight(p)}px;
`;
const StyledLabel = styled.label`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  display: -ms-grid;
`;
// initial state    focus
//  gray            cta
//  error           error
//  success         success
export const Text: React.FC<Props> = ({
  children,
  className,
  disabled,
  error,
  fullWidth,
  hideLabel,
  label,
  leftAddon,
  placeholder,
  rightAddon,
  success,
  size,
  defaultValue,
  onBlur,
  onChange,
  onClick,
  onFocus,
  value,
  noBottomMargin,
  extraInfo,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  /* eslint-disable jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
  return (
    <>
      <StyledLabel>
        <Wrapper container direction="column" fullWidth={fullWidth}>
          <HidableTypography
            hidden={Boolean(hideLabel)}
            type="secondary"
            color={t => t.color.label}
          >
            {label}
          </HidableTypography>
          <Flexbox item alignSelf="stretch">
            <Typography type="secondary" color={t => t.color.text}>
              <StyledOuterFlexbox
                container
                alignItems="center"
                {...{ size, placeholder, error, success, isFocused, noBottomMargin }}
              >
                {leftAddon && (
                  <AddonBox container justifyContent="center" alignItems="center" position="left">
                    {leftAddon}
                  </AddonBox>
                )}
                <UnstyledInput
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  {...{
                    size,
                    placeholder,
                    error,
                    success,
                    onChange,
                    leftAddon,
                    rightAddon,
                    value,
                    defaultValue,
                  }}
                  {...(error && error !== '' ? { 'aria-invalid': true } : {})}
                />
                {rightAddon && (
                  <AddonBox container justifyContent="center" alignItems="center" position="right">
                    {rightAddon}
                  </AddonBox>
                )}
                <AnimatePresence>
                  {error && error !== '' ? (
                    <BottomWrapper
                      size={size}
                      positionTransition
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 0, opacity: 0 }}
                      aria-live="assertive"
                      aria-relevant="additions removals"
                      key={'animation1'}
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
                        positionTransition
                        initial={{ y: -10, opacity: 0 }}
                        key={'animation2'}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 0, opacity: 0 }}
                        aria-live="assertive"
                        aria-relevant="additions removals"
                      >
                        <DensedTypography type="tertiary" color={t => t.color.label}>
                          {extraInfo}
                        </DensedTypography>
                      </BottomWrapper>
                    )
                  )}
                </AnimatePresence>
              </StyledOuterFlexbox>
            </Typography>
          </Flexbox>
        </Wrapper>
      </StyledLabel>
    </>
  );
};
