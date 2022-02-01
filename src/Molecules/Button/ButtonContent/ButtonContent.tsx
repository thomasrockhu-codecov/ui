import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonContentComponent, ButtonContentProps } from './ButtonContent.types';
import { Flexbox, Spinner, Typography } from '../../..';

const LOADING_ANIMATION_DURATION = 0.2;

const getSpinnerSize = (size: ButtonContentProps['size']) => {
  switch (size) {
    case 's':
      return 3;
    case 'm':
      return 5;
    default:
      return 6;
  }
};

const SpinnerAnimation = styled(motion.span)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.span<{
  $iconPlacement: 'left' | 'right';
  $size: ButtonContentProps['size'];
}>`
  display: block;
  align-self: center;
`;

const StyledTypography = styled(Typography)<{
  $size: ButtonContentProps['size'];
}>`
  ${(p) => (p.$size === 's' ? 'display: block;' : '')}
`;

export const ButtonContent: ButtonContentComponent = (props) => {
  const {
    children,
    colorFn,
    icon,
    iconPlacement,
    loading,
    variant,
    size,
    delayLoadingSpinnerAnimation = true,
  } = props;
  const theme = useContext(ThemeContext);

  let type: 'primary' | 'secondary' | 'tertiary';
  switch (size) {
    case 's':
      type = 'tertiary';
      break;
    case 'm':
      type = 'secondary';
      break;
    default:
      type = 'primary';
      break;
  }

  const content = (
    <>
      {icon ? (
        <Flexbox
          container
          gutter={variant === 'neutral' && size === 's' ? 1 : 2}
          justifyContent="space-between"
          alignItems="baseline"
        >
          {iconPlacement === 'left' && (
            <IconWrapper $iconPlacement={iconPlacement} $size={size}>
              {icon}
            </IconWrapper>
          )}
          <Flexbox item>
            <StyledTypography type={type} color="inherit" weight="bold" $size={size}>
              {children}
            </StyledTypography>
          </Flexbox>
          {iconPlacement === 'right' && (
            <IconWrapper $iconPlacement={iconPlacement} $size={size}>
              {icon}
            </IconWrapper>
          )}
        </Flexbox>
      ) : (
        <StyledTypography type={type} color="inherit" weight="bold" $size={size}>
          {children}
        </StyledTypography>
      )}
    </>
  );

  if (variant === 'neutral') {
    return content;
  }

  return (
    <>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: LOADING_ANIMATION_DURATION }}
      >
        {content}
      </motion.span>
      <AnimatePresence>
        {loading && (
          <SpinnerAnimation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: LOADING_ANIMATION_DURATION }}
          >
            <Spinner
              id={`spinner-${variant}-${size}-${colorFn && colorFn(theme)}`} // TODO: replace with unique id
              color={
                variant === 'primary' ? (t) => t.color.buttonText : colorFn || ((t) => t.color.cta)
              }
              size={getSpinnerSize(size)}
              delay={delayLoadingSpinnerAnimation}
            />
          </SpinnerAnimation>
        )}
      </AnimatePresence>
    </>
  );
};
