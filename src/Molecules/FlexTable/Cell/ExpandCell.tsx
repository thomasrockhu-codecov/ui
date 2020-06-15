import React from 'react';
import { Cell } from './index';
import { ExpandButton } from '../shared/ExpandButton/ExpandButton';
import { ExpandCellComponent } from './Cell.types';

export const ExpandCell: ExpandCellComponent = ({ disabled = false, expanded, onClick }) => (
  <Cell columnId="actions">
    <ExpandButton expanded={expanded} onClick={onClick} disabled={disabled} />
  </Cell>
);
