import React, { useRef } from 'react';
import styled from 'styled-components';
import { CardWithTitle, Box } from '../..';
import { useOnScreen } from '../../common/Hooks';
import { Component, InternalProps } from './ScrollableCard.types';

const CONTENT_BOTTOM_SPACING = 5;

const StyledCardWithTitle = styled(CardWithTitle)`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Container = styled(Box)<InternalProps>`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    max-height: 100%;
    overflow-y: auto;

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
  }
`;

const Content = styled.div`
  position: relative;
`;

const Intersection = styled.div`
  height: ${p => p.theme.spacing.unit(4)}px;
  width: ${p => p.theme.spacing.unit(4)}px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: red;
  pointer-events: none;
`;

export const ScrollableCard: Component = ({ children, ...rest }) => {
  const contentRef = useRef(null);
  const intersectionRef = useRef(null);
  const bottomOfContentOnScreen = useOnScreen(intersectionRef);

  return (
    <StyledCardWithTitle {...rest}>
      <Container mb={CONTENT_BOTTOM_SPACING} bottomOfContentOnScreen={bottomOfContentOnScreen}>
        <Content ref={contentRef}>
          {children}
          <Intersection ref={intersectionRef} />
        </Content>
      </Container>
    </StyledCardWithTitle>
  );
};
