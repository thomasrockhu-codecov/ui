import * as React from 'react';
import styled, { css } from 'styled-components';
import { Box, Flexbox, Typography } from '../../../../..';

const hoverIfNotKeyboardNav = css<{ isKeyboardNavigation?: boolean; disabled?: boolean }>`
  ${(p) =>
    p.disabled || p.isKeyboardNavigation
      ? ''
      : `
&:hover { 
background: ${p.theme.color.background};
}
`}
`;
const StyledBoxWithBorder = styled(Box)<any>`
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  min-width: ${(p) => p.theme.spacing.unit(35)}px;
  ${(p) =>
    p.focused && p.isKeyboardNavigation
      ? `
background: ${p.theme.color.background};
`
      : ''}
  ${hoverIfNotKeyboardNav}
`;

const EllipsizingText = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Action: React.FC<{
  isKeyboardNavigation: boolean;
  focused: boolean;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}> = ({ isKeyboardNavigation, focused, label, icon, disabled }) => (
  <StyledBoxWithBorder
    px={3}
    py={2}
    isKeyboardNavigation={isKeyboardNavigation}
    focused={focused}
    disabled={disabled}
  >
    <Typography
      type="secondary"
      weight="bold"
      color={(t) => (disabled ? t.color.disabledText : t.color.cta)}
    >
      <Flexbox container gutter={2} alignItems="center">
        {icon}
        <EllipsizingText>{label}</EllipsizingText>
      </Flexbox>
    </Typography>
  </StyledBoxWithBorder>
);
