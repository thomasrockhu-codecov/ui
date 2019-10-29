import React, { useRef, useState, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import { CardWithTitle } from '../..';
import { useOnScreen } from '../../common/Hooks';
import { Component, InternalProps } from './ScrollableCard.types';

const CONTENT_BOTTOM_SPACING = 5;

const fadeStyle = css<Pick<InternalProps, 'bottomOfContentOnScreen'>>`
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: ${p => p.theme.spacing.unit(13)}px;
    position: absolute;
    left: 0;
    bottom: ${p => p.theme.spacing.unit(CONTENT_BOTTOM_SPACING)}px;
    pointer-events: none;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);

    opacity: 1;
    transition: 0.3s opacity ease-out;
    ${p => p.bottomOfContentOnScreen && `opacity: 0;`}
  }
`;

const StyledCardWithTitle = styled(CardWithTitle)`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Container = styled.div<InternalProps>`
  margin-bottom: ${p => p.theme.spacing.unit(CONTENT_BOTTOM_SPACING)}px;

  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    max-height: 100%;
    overflow-y: auto;

    ${p => p.hasScrollbar && fadeStyle}
  }
`;

const Content = styled.div`
  position: relative;
`;

const Intersection = styled.div<Pick<InternalProps, 'hasScrollbar'>>`
  ${p =>
    p.hasScrollbar &&
    `
  height: ${p.theme.spacing.unit(4)}px;
  width: ${p.theme.spacing.unit(4)}px;
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
  `}
`;

export const ScrollableCard: Component = ({ children, ...rest }) => {
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const bottomOfContentOnScreen = useOnScreen(intersectionRef);

  useLayoutEffect(() => {
    const el = containerRef.current;

    if (containerRef && el) {
      setHasScrollbar(el.scrollHeight > el.clientHeight);
    }
  }, []);

  return (
    <StyledCardWithTitle {...rest}>
      <Container
        bottomOfContentOnScreen={bottomOfContentOnScreen}
        hasScrollbar={hasScrollbar}
        ref={containerRef}
      >
        <Content ref={contentRef}>
          {children}
          <Intersection ref={intersectionRef} hasScrollbar={hasScrollbar} />
        </Content>
      </Container>
    </StyledCardWithTitle>
  );
};
