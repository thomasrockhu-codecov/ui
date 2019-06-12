import React from 'react';
import styled from 'styled-components';
import { Props } from './TabTitle.types';

const StyledTitle = styled.span<Props>`
  color: ${props => props.theme.color.text};
  position: relative;
  display: inline-flex;
  align-items: center;

  ${props => {
    if (props.active) {
      return `
        &::after {
          content: '';
          background-color: ${props.theme.color.borderActive};
          display: block;
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: -1px;
          left: 0;
        }
      `;
    }

    return '';
  }}
`;

export const TabTitle: React.FC<Props> = ({ active = false, children }) => {
  return <StyledTitle active={active}>{children}</StyledTitle>;
};

TabTitle.displayName = 'TabTitle';
