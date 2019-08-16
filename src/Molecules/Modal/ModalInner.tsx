import React, { useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { InnerProps, DialogProps } from './Modal.types';
import NormalizedElements from '../../common/NormalizedElements';
import { isFunction } from '../../common/utils';
import { Box, Flexbox, Icon, Media, Typography, useKeyPress } from '../..';

const Backdrop = styled.div`
  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.modalBackdrop};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
`;

const DialogWrapper = styled(motion.div)`
  z-index: 3;
`;

const StyledDialog = styled.div<DialogProps>`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
  border: 0;
  background: ${({ theme }) => theme.color.card};

  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    width: ${({ theme }) => theme.spacing.unit(120)}px;
    box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowModal};
  }
`;

const Button = styled(NormalizedElements.Button)`
  display: flex;
  background: none;
  margin-left: ${p => p.theme.spacing.unit(4)}px;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const RightAlignedFlex = styled(Flexbox)`
  margin-left: auto;
`;

const Content = styled.div`
  max-height: 50vh;
  overflow-y: auto;
`;

export const ModalInner: React.FC<InnerProps> = ({ children, className, title, onClose }) => {
  const [show, setShow] = useState(false);
  const escapePress = useKeyPress('Escape');

  useEffect(() => {
    setShow(true); // Show is only used for animation

    return () => {
      setShow(false);
    };
  }, []);

  if (escapePress && isFunction(onClose)) {
    onClose();
  }

  const Dialog = () => (
    <StyledDialog
      className={className}
      role="dialog"
      show={show}
      {...(title ? { 'aria-label': title } : {})} // TODO: move to aria-labeledby when SSR uid works
    >
      <Box mb={2}>
        <Flexbox container alignItems="baseline">
          {title && (
            <Flexbox item>
              <Typography as="h2" type="title2">
                {title}
              </Typography>
            </Flexbox>
          )}
          <RightAlignedFlex item>
            <Button type="button" onClick={onClose}>
              <Icon.Cross size={5} title="Close this dialog" />
            </Button>
          </RightAlignedFlex>
        </Flexbox>
      </Box>
      <Content>{children}</Content>
    </StyledDialog>
  );

  return (
    <>
      <FocusLock>
        <RemoveScroll>
          <Backdrop>
            <Media query={t => t.media.lessThan(t.breakpoints.sm)}>
              <Dialog />
            </Media>
            <Media query={t => t.media.greaterThan(t.breakpoints.sm)}>
              <DialogWrapper
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: 'spring',
                  damping: 15,
                  stiffness: 200,
                }}
              >
                <Dialog />
              </DialogWrapper>
            </Media>
          </Backdrop>
        </RemoveScroll>
      </FocusLock>
    </>
  );
};

ModalInner.displayName = 'ModalInner';
