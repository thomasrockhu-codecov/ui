import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersect } from '../../common/Hooks';
import { Component, InternalProps, Props } from './FadedScroll.types';
import {
  containerStyles,
  intersectionStyles,
  scrollerStyles,
  fadeStyles,
} from './FadedScroll.styles';

const Container = styled.div<InternalProps & Props>`
  ${containerStyles}
  ${fadeStyles}
`;

const Scroller = styled.div<Props>`
  ${scrollerStyles}
`;

const Content = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const IntersectionBottom = styled.div<Props>`
  ${intersectionStyles}
  bottom: 0;
`;

const IntersectionTop = styled.div<Props>`
  ${intersectionStyles}
  top: 0;
`;

const components = {
  Scroller,
  Content,
};

export const FadedScroll: Component & {
  components: typeof components;
} = ({
  children,
  className,
  disableTopFade,
  enableMobileFade = false,
  fadeHeight = 15,
  maxHeight,
}) => {
  const [setIntersectionTopRef, intersectionTopRatio] = useIntersect<HTMLDivElement>();
  const [setIntersectionBottomRef, intersectionBottomRatio] = useIntersect<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container
      className={className}
      enableMobileFade={enableMobileFade}
      fadeTopPercentage={disableTopFade ? 0 : fadeHeight}
      fadeBottomPercentage={100 - fadeHeight}
      intersectionTopRatio={intersectionTopRatio}
      intersectionBottomRatio={intersectionBottomRatio}
      maxHeight={maxHeight}
    >
      <Scroller enableMobileFade={enableMobileFade} maxHeight={maxHeight}>
        <Content ref={contentRef}>
          <IntersectionTop ref={setIntersectionTopRef} />
          {children}
          <IntersectionBottom ref={setIntersectionBottomRef} />
        </Content>
      </Scroller>
    </Container>
  );
};

FadedScroll.components = components;
FadedScroll.displayName = 'FadedScroll';
