import React from 'react';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox, Typography } from '../../..';
import { useColumn } from '../shared/ColumnProvider';
import { CellComponent } from './Cell.types';

const Cell: CellComponent = ({ children, className, density, fontSize, columnId }) => {
  const [columnState] = useColumn(columnId);

  return (
    <Flexbox className={className} role="cell" {...columnState.flexProps}>
      {isElement(children) && children}
      {isFunction(children) ? (
        children({ density, fontSize, columnId })
      ) : (
        <Typography>{children}</Typography>
      )}
    </Flexbox>
  );
};

export default Cell;
