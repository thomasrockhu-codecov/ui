import React, { useState, useEffect, useCallback } from 'react';
import { useUIDSeed } from 'react-uid';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { motion } from 'framer-motion';
import { Props, TitleProps } from './Drawer.types';
import { isBoolean, isElement } from '../../common/utils';
import {
  useKeyPress,
  FadedScroll,
  Portal,
  useMedia,
  Flexbox,
  Typography,
  Button,
  Icon,
} from '../..';

const displayName = 'Drawer';

const Container = styled(motion.div)`
  box-sizing: border-box;
  // padding: ${({ theme }) => theme.spacing.unit(5)}px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.card};
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -10px 16px 0 ${({ theme }) => theme.color.shadowModal};

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.sm)} {
    width: ${({ theme }) => theme.spacing.unit(100)}px;
  }

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.xl)} {
    width: ${({ theme }) => theme.spacing.unit(120)}px;
  }
`;

const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const H2 = styled.h2`
  padding-right: ${p => p.theme.spacing.unit(4)}px;
`;

const animationProps = {
  initial: {
    opacity: 0,
    x: 70,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: 'spring',
    damping: 15,
    stiffness: 200,
  },
};

const components = {
  Container,
  Content,
};

const Title: React.FC<TitleProps> = ({ title, uid }) => {
  return (
    <span id={uid}>
      {isElement(title) ? (
        title
      ) : (
        <Typography as={H2} type="title2">
          {title}
        </Typography>
      )}
    </span>
  );
};

const MainTitle = styled(Flexbox)`
  width: 100%;
`;

const TitleWrapper = styled(Flexbox)`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing.unit(0)}px;
  background: ${({ theme }) => theme.color.card};
`;

const Subtitle = styled(Flexbox)`
  margin-top: ${({ theme }) => theme.spacing.unit(5)}px;
  margin-bottom: ${({ theme }) => theme.spacing.unit(5)}px;
  width: 100%;
`;

export const Drawer = (React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, onClose, open: isOpenExternal, title, subtitle }, ref) => {
    const isControlled = isBoolean(isOpenExternal);
    const escapePress = useKeyPress('Escape');
    const [isOpenInternal, setIsOpenInternal] = useState(true);
    const isOpen = isControlled ? isOpenExternal : isOpenInternal;
    const isDesktop = useMedia(t => t.media.greaterThan(t.breakpoints.sm)) || false;
    const seed = useUIDSeed();
    const uid = seed(displayName);

    const handleCloseClick = useCallback(() => {
      setIsOpenInternal(false);

      if (onClose) {
        onClose();
      }
    }, [onClose]);

    useEffect(() => {
      if (isOpen && escapePress) {
        handleCloseClick();
      }
    }, [escapePress, handleCloseClick, isOpen]);

    return isOpen ? (
      <Portal>
        <FocusLock disabled={isDesktop}>
          <RemoveScroll enabled={!isDesktop}>
            <Container className={className} aria-labelledby={uid} {...animationProps} ref={ref}>
              <TitleWrapper container direction="column">
                {title && (
                  <MainTitle
                    container
                    direction="row"
                    alignItems="baseline"
                    justifyContent="space-between"
                  >
                    <Title title={title} uid={uid} />
                    <Button type="button" variant="neutral" onClick={handleCloseClick}>
                      <Icon.CrossThin size={5} title="Close this drawer" />
                    </Button>
                  </MainTitle>
                )}

                {subtitle && (
                  <Subtitle item>
                    {subtitle} {/* TODO: Create a subtitle component */}
                  </Subtitle>
                )}
              </TitleWrapper>

              <FadedScroll>{children}</FadedScroll>
            </Container>
          </RemoveScroll>
        </FocusLock>
      </Portal>
    ) : null;
  },
) as any) as React.FC<Props> & {
  components: typeof components;
};

Drawer.components = components;

Drawer.displayName = displayName;
