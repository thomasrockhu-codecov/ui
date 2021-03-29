import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersect } from '../../common/Hooks';
import { Component, InternalProps, Props } from './FadedScroll.types';
import {
  containerStyles,
  fadeBottomDesktopStyles,
  fadeBottomStyles,
  fadeTopDesktopStyles,
  fadeTopStyles,
  intersectionStyles,
  scrollerStyles,
} from './FadedScroll.styles';

const Container = styled.div<InternalProps & Props>`
  ${containerStyles}
  ${(p) => !p.disableTopFade && (p.enableMobileFade ? fadeTopStyles : fadeTopDesktopStyles)}
  ${(
    p,
  ) => (p.enableMobileFade ? fadeBottomStyles : fadeBottomDesktopStyles)}
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
  fadeHeight = 13,
  maxHeight,
}) => {
  const [setIntersectionTopRef, intersectionTopRatio] = useIntersect<HTMLDivElement>();
  const [setIntersectionBottomRef, intersectionBottomRatio] = useIntersect<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container
      className={className}
      disableTopFade={disableTopFade}
      enableMobileFade={enableMobileFade}
      fadeHeight={fadeHeight}
      intersectionTopRatio={intersectionTopRatio}
      intersectionBottomRatio={intersectionBottomRatio}
      maxHeight={maxHeight}
    >
      <Scroller enableMobileFade={enableMobileFade} maxHeight={maxHeight}>
        <Content ref={contentRef}>
          {!disableTopFade && (
            <IntersectionTop fadeHeight={fadeHeight} ref={setIntersectionTopRef} />
          )}
          {children}
          <IntersectionBottom fadeHeight={fadeHeight} ref={setIntersectionBottomRef} />
        </Content>
      </Scroller>
    </Container>
  );
};

FadedScroll.components = components;
FadedScroll.displayName = 'FadedScroll';
