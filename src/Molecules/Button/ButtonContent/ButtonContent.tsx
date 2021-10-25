import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonContentComponent, ButtonContentProps } from './ButtonContent.types';
import { Spinner, Typography } from '../../..';

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

  let type: 'secondary' | 'primary' | 'tertiary';
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

  const IconWrapper = styled.div`
    display: inline-block;
    vertical-align: text-bottom;
    margin-left: ${(p) => iconPlacement === 'right' && p.theme.spacing.unit(1)}px;
    margin-right: ${(p) => iconPlacement === 'left' && p.theme.spacing.unit(1)}px;
    & > * {
      color: inherit;
    }
  `;

  const content = (
    <Typography type={type} color="inherit" weight="bold">
      {icon && iconPlacement === 'left' && <IconWrapper>{icon}</IconWrapper>}
      {children}
      {icon && iconPlacement === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </Typography>
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
