import React from 'react';
import styled from 'styled-components';
import { SortButtonProps } from './HeaderContent.types';
import { Button } from '../../../..';

const StyledButton = styled(Button)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  justify-content: inherit;
  &:focus,
  &: active {
    outline: none;
  }
`;

// TODO: Change this to an actual button for better a11y
export const SortButton: React.FC<SortButtonProps> = ({ children, onClick }) => (
  <StyledButton
    variant="neutral"
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </StyledButton>
);
