import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumn } from '../shared/ColumnProvider';
import { CellComponent, InnerCellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const InnerCell: InnerCellComponent = React.memo(
  ({ flexProps, children, className, fontSize, columnId }) => (
    <StyledFlexbox className={className} role="cell" {...flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize, columnId })
        : !isElement(children) && <TextWrapper fontSize={fontSize}>{children}</TextWrapper>}
    </StyledFlexbox>
  ),
);

const Cell: CellComponent = ({ children, className, fontSize, columnId }) => {
  const [columnState] = useColumn(columnId);

  if (!R.prop('flexProps', columnState)) {
    return null;
  }

  return (
    <InnerCell
      flexProps={columnState.flexProps}
      className={className}
      fontSize={fontSize}
      columnId={columnId}
    >
      {children}
    </InnerCell>
  );
};

export default Cell;
