import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from '../../common/Hooks';
import { Component, InternalProps, Props } from './FadedScroll.types';
import {
  fadeBottom,
  fadeBottomDesktop,
  fadeTop,
  fadeTopDesktop,
  flexContainer,
  intersection,
  scroll,
  scrollDesktop,
} from './FadedScroll.styles';

const Container = styled.div<InternalProps & Props>`
  height: 100%;
  ${p => !p.maxHeight && flexContainer}
  ${p => !p.disableTopFade && (p.enableMobileFade ? fadeTop : fadeTopDesktop)}
  ${p => (p.enableMobileFade ? fadeBottom : fadeBottomDesktop)}
`;

const Scroller = styled.div<Props>`
  ${p => (p.enableMobileFade ? scroll : scrollDesktop)}
`;

const Content = styled.div`
  position: relative;
`;

const IntersectionBottom = styled.div`
  ${intersection}
  bottom: 0;
`;

const IntersectionTop = styled.div<Props>`
  ${intersection}
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
  const contentRef = useRef<HTMLDivElement | null>(null);
  const intersectionTopRef = useRef<HTMLDivElement | null>(null);
  const intersectionBottomRef = useRef<HTMLDivElement | null>(null);
  const intersectionTopOnScreen = useOnScreen(intersectionTopRef);
  const intersectionBottomOnScreen = useOnScreen(intersectionBottomRef);

  return (
    <Container
      className={className}
      disableTopFade={disableTopFade}
      enableMobileFade={enableMobileFade}
      fadeHeight={fadeHeight}
      intersectionTopOnScreen={intersectionTopOnScreen}
      intersectionBottomOnScreen={intersectionBottomOnScreen}
    >
      <Scroller enableMobileFade={enableMobileFade} maxHeight={maxHeight}>
        <Content ref={contentRef}>
          {!disableTopFade && <IntersectionTop ref={intersectionTopRef} />}
          {children}
          <IntersectionBottom ref={intersectionBottomRef} />
        </Content>
      </Scroller>
    </Container>
  );
};

FadedScroll.components = components;
FadedScroll.displayName = 'FadedScroll';
