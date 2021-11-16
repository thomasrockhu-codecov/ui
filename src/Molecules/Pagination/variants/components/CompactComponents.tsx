import React from 'react';
import styled from 'styled-components';
import { Icon, Button, Link } from '../../../../index';

const ChevronIcon: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) =>
  direction === 'left' ? (
    <Icon.ChevronLeft16 inline color="inherit" />
  ) : (
    <Icon.ChevronRight16 inline color="inherit" />
  );

const [StyledButton, StyledLink] = [Button, Link].map(
  (elem: any) => styled(elem)<{ $direction: 'left' | 'right' }>`
    display: flex;
    height: ${(p) => p.theme.spacing.unit(10)}px;
    width: ${(p) => p.theme.spacing.unit(8)}px;
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${(t) => t.theme.color.text};
    flex-direction: row;
    justify-content: ${(p) => (p.$direction === 'left' ? 'flex-start' : 'flex-end')};
    align-items: center;
  `,
);

export { ChevronIcon, StyledButton, StyledLink };
