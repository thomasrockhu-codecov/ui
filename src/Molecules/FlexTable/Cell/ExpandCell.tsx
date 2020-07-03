import React from 'react';
import { Cell } from './index';
import { ExpandCellComponent } from './Cell.types';
import { Icon, Button } from '../../..';

const ExpandButton: React.FC<{ expanded: boolean; onClick: () => void; disabled: boolean }> = ({
  expanded,
  onClick,
  disabled,
}) => (
  <Button variant="neutral" onClick={onClick} aria-expanded={expanded} disabled={disabled}>
    {expanded ? <Icon.ChevronUp /> : <Icon.ChevronDown />}
  </Button>
);

export const ExpandCell: ExpandCellComponent = ({
  columnId,
  disabled = false,
  expanded,
  onClick,
}) => (
  <Cell columnId={columnId}>
    <ExpandButton expanded={expanded} onClick={onClick} disabled={disabled} />
  </Cell>
);
