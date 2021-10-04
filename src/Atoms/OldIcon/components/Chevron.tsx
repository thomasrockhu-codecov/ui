import React from 'react';
import styled from 'styled-components';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

type Direction = {
  direction: 'up' | 'right' | 'down' | 'left';
};

const DIRECTION = {
  up: 180,
  right: 270,
  down: 0,
  left: 90,
};

const StyledIconBase = styled(IconBase)<Direction>`
  transform: ${(p) => `rotate(${DIRECTION[p.direction]}deg`});
`;

export const Chevron = ({ direction = 'down', ...props }: BaseProps & Direction) => {
  return (
    <StyledIconBase direction={direction} {...props} viewBox="0 0 24 24">
      <polygon points="19.969 4 24 8.027 12 20 0 8.027 4.031 4 12 11.952" />
    </StyledIconBase>
  );
};

Chevron.displayName = 'Icon.Chevron';
