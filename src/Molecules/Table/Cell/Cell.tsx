import React from 'react';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumn } from '../shared/ColumnProvider';
import { CellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';

const Cell: CellComponent = ({ children, className, density, fontSize, columnId }) => {
  const [columnState] = useColumn(columnId);

  if (!R.prop('flexProps', columnState)) {
    return null;
  }

  return (
    <Flexbox className={className} role="cell" {...columnState.flexProps}>
      {isElement(children) && children}
      {isFunction(children) ? (
        children({ density, fontSize, columnId })
      ) : (
        <TextWrapper fontSize={fontSize} density={density}>
          {children}
        </TextWrapper>
      )}
    </Flexbox>
  );
};

export default Cell;
