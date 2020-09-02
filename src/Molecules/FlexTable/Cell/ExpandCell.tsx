import React from 'react';
import { Cell } from './index';
import { ExpandButton } from '../shared/ExpandButton/ExpandButton';
import { ExpandCellComponent } from './Cell.types';

export const ExpandCell: ExpandCellComponent = ({
  columnId,
  disabled = false,
  expanded,
  onClick,
  ...cellProps
}) => (
  <Cell columnId={columnId} {...cellProps}>
    <ExpandButton expanded={expanded} onClick={onClick} disabled={disabled} />
  </Cell>
);
