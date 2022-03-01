import React from 'react';
import { Button, Icon } from '../../../../index';

export const ExpandButton: React.FC<{
  expanded: boolean;
  onClick: () => void;
  disabled: boolean;
}> = ({ expanded, disabled, onClick }) => (
  <Button variant="neutral" onClick={onClick} aria-expanded={expanded} disabled={disabled}>
    {expanded ? (
      <Icon.ChevronUp8 color={(t) => (disabled ? t.color.disabled : t.color.text)} />
    ) : (
      <Icon.ChevronDown8 color={(t) => (disabled ? t.color.disabled : t.color.text)} />
    )}
  </Button>
);
