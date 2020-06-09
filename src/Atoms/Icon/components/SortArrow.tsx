import React from 'react';
import styled from 'styled-components';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

type Direction = {
  direction: 'ascending' | 'descending';
};

const DIRECTION = {
  ascending: 180,
  descending: 0,
};

const StyledIconBase = styled(IconBase)<Direction>`
  transform: ${p => `rotate(${DIRECTION[p.direction]}deg`});
`;

export const SortArrow = (props: BaseProps & Direction) => {
  return (
    <StyledIconBase {...props} viewBox="0 0 8 12">
      <path
        id="a"
        d="M9 2v8.4l1.66-1.62L12 10.1 8 14l-4-3.9 1.34-1.32L7 10.4V2h2z"
        fill="#282823"
        fillRule="evenodd"
        transform="matrix(1 0 0 -1 -4 14)"
      />
    </StyledIconBase>
  );
};

SortArrow.displayName = 'Icon.SortArrow';
