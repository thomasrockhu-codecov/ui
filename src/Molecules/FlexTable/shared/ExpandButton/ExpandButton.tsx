import React from 'react';
import styled from 'styled-components';
import { Button, Icon, Media } from '../../../../index';

const StyledButton = styled(Button)`
  flex: 1;
  justify-content: flex-end;
  &:focus {
    outline: none;
  }
`;

const SmallScreenExpandButton: React.FC<{
  expanded: boolean;
  disabled: boolean;
  onClick: () => void;
  size: number;
}> = ({ expanded, disabled, onClick, size }) => (
  <StyledButton variant="neutral" onClick={onClick} aria-expanded={expanded} disabled={disabled}>
    {expanded ? (
      <Icon.ChevronUp size={size} fill={(t) => (disabled ? t.color.disabled : t.color.text)} />
    ) : (
      <Icon.ChevronDown size={size} fill={(t) => (disabled ? t.color.disabled : t.color.text)} />
    )}
  </StyledButton>
);

const LargeScreenExpandButton: React.FC<{
  expanded: boolean;
  disabled: boolean;
  onClick: () => void;
  size: number;
}> = ({ expanded, disabled, onClick, size }) => (
  <StyledButton variant="neutral" onClick={onClick} aria-expanded={expanded} disabled={disabled}>
    <Icon.ThinChevron
      direction={expanded ? 'up' : 'down'}
      size={size}
      fill={(t) => (disabled ? t.color.disabled : t.color.text)}
    />
  </StyledButton>
);

export const ExpandButton: React.FC<{
  expanded: boolean;
  onClick: () => void;
  disabled: boolean;
}> = ({ expanded, disabled, onClick }) => (
  <>
    <Media
      query={(t) => t.media.lessThan(t.breakpoints.md)}
      as={() => (
        <SmallScreenExpandButton
          expanded={expanded}
          disabled={disabled}
          onClick={onClick}
          size={2}
        />
      )}
    ></Media>
    <Media
      query={(t) => t.media.greaterThan(t.breakpoints.md)}
      as={() => (
        <LargeScreenExpandButton
          expanded={expanded}
          disabled={disabled}
          onClick={onClick}
          size={4}
        />
      )}
    ></Media>
  </>
);
