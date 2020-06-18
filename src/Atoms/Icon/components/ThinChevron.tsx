import React from 'react';
import styled from 'styled-components';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

type Direction = {
  direction: 'up' | 'right' | 'down' | 'left';
};

const DIRECTION = {
  up: 180,
  down: 0,
};

const StyledIconBase = styled(IconBase)<Direction>`
  transform: ${p => `rotate(${DIRECTION[p.direction]}deg`});
`;

export const ThinChevron = ({ direction = 'down', ...props }: BaseProps & Direction) => {
  return (
    <StyledIconBase direction={direction} {...props} viewBox="0 0 16 16">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path
          fill="#282823"
          fillRule="evenodd"
          d="M14.616 3.584l1.388 1.44-7.997 7.711L.005 5.024l1.388-1.44 6.613 6.373z"
        />
      </svg>
    </StyledIconBase>
  );
};

ThinChevron.displayName = 'Icon.ThinChevron';
