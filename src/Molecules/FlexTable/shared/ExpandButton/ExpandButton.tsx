import React from 'react';
import { Button, OldIcon, Media } from '../../../../index';

const SmallScreenExpandButton: React.FC<{
  className?: string;
  expanded: boolean;
  disabled: boolean;
  onClick: () => void;
  size: number;
}> = ({ className, expanded, disabled, onClick, size }) => (
  <Button
    className={className}
    variant="neutral"
    onClick={onClick}
    aria-expanded={expanded}
    disabled={disabled}
  >
    {expanded ? (
      <OldIcon.ChevronUp size={size} fill={(t) => (disabled ? t.color.disabled : t.color.text)} />
    ) : (
      <OldIcon.ChevronDown size={size} fill={(t) => (disabled ? t.color.disabled : t.color.text)} />
    )}
  </Button>
);

const LargeScreenExpandButton: React.FC<{
  className?: string;
  expanded: boolean;
  disabled: boolean;
  onClick: () => void;
  size: number;
}> = ({ className, expanded, disabled, onClick, size }) => (
  <Button
    className={className}
    variant="neutral"
    onClick={onClick}
    aria-expanded={expanded}
    disabled={disabled}
  >
    <OldIcon.ThinChevron
      direction={expanded ? 'up' : 'down'}
      size={size}
      fill={(t) => (disabled ? t.color.disabled : t.color.text)}
    />
  </Button>
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
