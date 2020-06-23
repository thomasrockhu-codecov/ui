import React from 'react';
import styled from 'styled-components';
import { SortButtonProps } from './HeaderContent.types';

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

// TODO: Change this to an actual button for better a11y
export const SortButton: React.FC<SortButtonProps> = ({ children, onClick }) => (
  <StyledLink
    href="#"
    role="button"
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </StyledLink>
);
