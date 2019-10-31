import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useOnScreen } from '../../common/Hooks';
import { Component, InternalProps, Props } from './FadedScroll.types';
import { getValueFromNumberOrString } from '../../common/utils';

const scroll = css<Pick<Props, 'maxHeight'>>`
  max-height: ${p =>
    p.maxHeight ? ` ${getValueFromNumberOrString(p.maxHeight, p.theme)}` : '100%'};
  overflow-y: auto;
`;

const desktopsScroll = css<Pick<Props, 'maxHeight'>>`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${scroll}
  }
`;

const Outer = styled.div<Pick<InternalProps, 'intersectionOnScreen'> & Props>`
  position: relative;
  height: 100%;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: ${p => getValueFromNumberOrString(p.fadeHeight!, p.theme)};
    position: absolute;
    left: 0;
    bottom: 0;
    pointer-events: none;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    opacity: 1;
    transition: 0.3s opacity ease-out;

    ${p => p.intersectionOnScreen && `opacity: 0;`}
  }
`;

const Inner = styled.div<Props>`
  ${p => (p.enableMobileFade ? scroll : desktopsScroll)}
`;

const Content = styled.div`
  position: relative;
`;

const Intersection = styled.div`
  height: ${p => p.theme.spacing.unit(1)}px;
  width: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

export const FadedScroll: Component = ({
  children,
  enableMobileFade = false,
  fadeHeight = 13,
  maxHeight,
  ...rest
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const intersectionOnScreen = useOnScreen(intersectionRef);

  return (
    <Outer fadeHeight={fadeHeight} intersectionOnScreen={intersectionOnScreen}>
      <Inner enableMobileFade={enableMobileFade} maxHeight={maxHeight} {...rest}>
        <Content ref={contentRef}>
          {children}
          <Intersection ref={intersectionRef} />
        </Content>
      </Inner>
    </Outer>
  );
};
