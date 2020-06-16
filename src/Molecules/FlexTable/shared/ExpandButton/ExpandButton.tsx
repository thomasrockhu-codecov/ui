import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '../../../../index';

const StyledButton = styled(Button)`
  &:focus {
    outline: none;
  }
`;
export const ExpandButton: React.FC<{
  expanded: boolean;
  onClick: () => void;
  disabled: boolean;
}> = ({ expanded, disabled, onClick }) => (
  <StyledButton variant="neutral" onClick={onClick} aria-expanded={expanded} disabled={disabled}>
    {expanded ? (
      <Icon.ChevronUp fill={t => (disabled ? t.color.disabled : t.color.text)} />
    ) : (
      <Icon.ChevronDown fill={t => (disabled ? t.color.disabled : t.color.text)} />
    )}
  </StyledButton>
);
