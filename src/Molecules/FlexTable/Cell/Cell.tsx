import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumn } from '../shared/ColumnProvider';
import { CellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const Cell: CellComponent = ({ children, className, fontSize, columnId }) => {
  const [columnState] = useColumn(columnId);

  if (!R.prop('flexProps', columnState)) {
    return null;
  }
  return (
    <StyledFlexbox className={className} role="cell" {...columnState.flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize, columnId })
        : !isElement(children) && <TextWrapper fontSize={fontSize}>{children}</TextWrapper>}
    </StyledFlexbox>
  );
};

export default Cell;
