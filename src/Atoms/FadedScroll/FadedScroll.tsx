import React from 'react';
import styled from 'styled-components';
import { useIntersect } from '../../common/Hooks';
import { Component, InternalProps, Props } from './FadedScroll.types';
import {
  containerStyles,
  fadeBottomStyles,
  fadeBottomDesktopStyles,
  fadeTopStyles,
  fadeTopDesktopStyles,
  fadeRightStyles,
  fadeRightDesktopStyles,
  fadeLeftStyles,
  fadeLeftDesktopStyles,
  intersectionStyles,
  scrollerStyles,
} from './FadedScroll.styles';

const Container = styled.div<InternalProps & Props>`
  ${containerStyles}
  ${(p) => (!p.disableTopFade && p.enableMobileFade ? fadeTopStyles : fadeTopDesktopStyles)};
  ${(p) =>
    !p.disableBottomFade && p.enableMobileFade ? fadeBottomStyles : fadeBottomDesktopStyles};
  ${(p) => (p.rightFade && p.enableMobileFade ? fadeRightStyles : fadeRightDesktopStyles)};
  ${(p) => (p.leftFade && p.enableMobileFade ? fadeLeftStyles : fadeLeftDesktopStyles)};
`;

const Scroller = styled.div<Props>`
  ${scrollerStyles}
`;

const Content = styled.div`
  position: relative;
`;

const IntersectionTop = styled.div<Props>`
  ${intersectionStyles}
  top: 0;
`;

const IntersectionRight = styled.div<Props>`
  ${intersectionStyles}
  right: 0;
`;

const IntersectionLeft = styled.div<Props>`
  ${intersectionStyles}
  left: 0;
`;

const IntersectionBottom = styled.div<Props>`
  ${intersectionStyles}
  bottom: 0;
`;

const components = {
  Scroller,
};

export const FadedScroll: Component & {
  components: typeof components;
} = ({
  children,
  className,
  disableTopFade,
  disableBottomFade,
  enableMobileFade = false,
  fadeHeight = 13,
  maxHeight,
  leftFade = false,
  rightFade = false,
}) => {
  const [setIntersectionTopRef, intersectionTopRatio] = useIntersect<HTMLDivElement>();
  const [setIntersectionLeftRef, intersectionLeftRatio] = useIntersect<HTMLDivElement>();
  const [setIntersectionRightRef, intersectionRightRatio] = useIntersect<HTMLDivElement>();
  const [setIntersectionBottomRef, intersectionBottomRatio] = useIntersect<HTMLDivElement>();

  return (
    <Container
      className={className}
      disableTopFade={disableTopFade}
      disableBottomFade={disableBottomFade}
      enableMobileFade={enableMobileFade}
      leftFade={leftFade}
      rightFade={rightFade}
      fadeHeight={fadeHeight}
      intersectionTopRatio={intersectionTopRatio}
      intersectionLeftRatio={intersectionLeftRatio}
      intersectionRightRatio={intersectionRightRatio}
      intersectionBottomRatio={intersectionBottomRatio}
      maxHeight={maxHeight}
    >
      <Scroller enableMobileFade={enableMobileFade} maxHeight={maxHeight}>
        <Content>
          {leftFade && <IntersectionLeft ref={setIntersectionLeftRef} />}
          {!disableTopFade && <IntersectionTop ref={setIntersectionTopRef} />}
          {children}
          {!disableBottomFade && <IntersectionBottom ref={setIntersectionBottomRef} />}
          {rightFade && <IntersectionRight ref={setIntersectionRightRef} />}
        </Content>
      </Scroller>
    </Container>
  );
};

FadedScroll.components = components;
FadedScroll.displayName = 'FadedScroll';
