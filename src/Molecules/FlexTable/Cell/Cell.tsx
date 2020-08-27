import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumnLayout } from '../shared/ColumnProvider';
import { CellComponent, InnerCellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';
import { RenderForSizes } from '../shared';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const InnerCell: InnerCellComponent = React.memo(
  ({ children, className, columnId, flexProps, fontSize }) => (
    <StyledFlexbox className={className} role="cell" {...flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize, columnId })
        : !isElement(children) && <TextWrapper fontSize={fontSize}>{children}</TextWrapper>}
    </StyledFlexbox>
  ),
);

const Cell: CellComponent = ({ children, className, columnId }) => {
  const {
    fontSize: xsFontSize,
    sm: smTable,
    md: mdTable,
    lg: lgTable,
    xl: xlTable,
  } = useFlexTable();
  const [columnLayout] = useColumnLayout(columnId);

  if (!R.prop('flexProps', columnLayout)) {
    return null;
  }

  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize }}
      sm={smTable}
      md={mdTable}
      lg={lgTable}
      xl={xlTable}
      Container={({ fontSize, children: component }) => (
        <InnerCell
          className={className}
          columnId={columnId}
          flexProps={columnLayout.flexProps}
          fontSize={fontSize}
        >
          {component}
        </InnerCell>
      )}
      Component={() => children}
    />
  );
};

Cell.TextWrapper = React.memo(TextWrapper);
export default Cell;
