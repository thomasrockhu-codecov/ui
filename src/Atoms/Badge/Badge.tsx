import React from 'react';
import styled from 'styled-components';
import { Typography } from '../..';
import { isElement, isFunction } from '../../common/utils';
import { BadgeComponent, Props as BadgeComponentProps } from './Badge.types';

const SMALL_BADGE_SIZE = 2;
const MEDIUM_BADGE_SIZE = 6;

const Circle = styled.div<BadgeComponentProps & { size: number }>`
  display: inline-block;
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor(p.theme) : p.theme.color.cta)};
  border-radius: ${(p) => p.theme.spacing.unit(p.size)}px;
  text-align: center;
  height: ${(p) => p.theme.spacing.unit(p.size)}px;
  min-width: ${(p) => p.theme.spacing.unit(p.size)}px;
  margin-left: ${(p) => p.theme.spacing.unit(1)}px;
  margin-bottom: 1px;
`;

export const Badge: BadgeComponent = ({ children, backgroundColor, color }) => {
  return (
    <Circle
      size={typeof children !== 'undefined' ? MEDIUM_BADGE_SIZE : SMALL_BADGE_SIZE}
      backgroundColor={backgroundColor}
    >
      {isElement(children) && children}
      {isFunction(children)
        ? children()
        : !isElement(children) && (
            <Typography color={(t) => (color ? color(t) : t.color.textLight)}>
              {children}
            </Typography>
          )}
    </Circle>
  );
};
