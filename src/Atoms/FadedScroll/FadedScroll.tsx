import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from '../../common/Hooks';
import { Component, InternalProps, Props } from './FadedScroll.types';
import { getValueFromNumberOrString } from '../../common/utils';

const Outer = styled.div<Pick<InternalProps, 'intersectionOnScreen'> & Pick<Props, 'fadeHeight'>>`
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

const Inner = styled.div<Pick<Props, 'maxHeightDesktop'>>`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    max-height: ${p =>
      p.maxHeightDesktop ? ` ${getValueFromNumberOrString(p.maxHeightDesktop, p.theme)}` : '100%'};
    overflow-y: auto;
  }
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
  fadeHeight = 13,
  maxHeightDesktop,
  ...rest
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const intersectionOnScreen = useOnScreen(intersectionRef);

  return (
    <Outer fadeHeight={fadeHeight} intersectionOnScreen={intersectionOnScreen}>
      <Inner maxHeightDesktop={maxHeightDesktop} {...rest}>
        <Content ref={contentRef}>
          {children}
          <Intersection ref={intersectionRef} />
        </Content>
      </Inner>
    </Outer>
  );
};
