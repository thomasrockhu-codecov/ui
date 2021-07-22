import React from 'react';
import styled from 'styled-components';
import { Button, Icon, Media } from '../../../../index';

const StyledButton = styled(Button)`
  flex: 1;
  justify-content: flex-end;
`;

const SmallScreenExpandButton: React.FC<{
  className?: string;
  expanded: boolean;
  disabled: boolean;
  onClick: () => void;
  size: number;
}> = ({ className, expanded, disabled, onClick, size }) => (
  <StyledButton
    className={className}
    variant="neutral"
    onClick={onClick}
    aria-expanded={expanded}
    disabled={disabled}
  >
    {expanded ? (
      <Icon.ChevronUp size={size} fill={(t) => (disabled ? t.color.disabled : t.color.text)} />
    ) : (
      <Icon.ChevronDown size={size} fill={(t) => (disabled ? t.color.disabled : t.color.text)} />
    )}
  </StyledButton>
);

const LargeScreenExpandButton: React.FC<{
  className?: string;
  expanded: boolean;
  disabled: boolean;
  onClick: () => void;
  size: number;
}> = ({ className, expanded, disabled, onClick, size }) => (
  <StyledButton
    className={className}
    variant="neutral"
    onClick={onClick}
    aria-expanded={expanded}
    disabled={disabled}
  >
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
      as={({ className }) => (
        <SmallScreenExpandButton
          className={className}
          expanded={expanded}
          disabled={disabled}
          onClick={onClick}
          size={2}
        />
      )}
    />

    <Media
      query={(t) => t.media.greaterThan(t.breakpoints.md)}
      as={({ className }) => (
        <LargeScreenExpandButton
          className={className}
          expanded={expanded}
          disabled={disabled}
          onClick={onClick}
          size={4}
        />
      )}
    />
  </>
);
