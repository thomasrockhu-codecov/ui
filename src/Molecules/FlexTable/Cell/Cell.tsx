import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useFlexCellProps } from '../shared/ColumnProvider';
import { CellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const Cell: CellComponent = (props) => {
  const { children, columnId, className } = props;
  const { fontSize, sm, md, lg, xl } = useFlexTable();
  const flexProps = useFlexCellProps(props);

  return (
    <StyledFlexbox className={className} role="cell" {...flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ columnId, fontSize, sm, md, lg, xl })
        : // Truncate? exists on CellComponent through TextWrapper props
          !isElement(children) && (
            <TextWrapper fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl}>
              {children}
            </TextWrapper>
          )}
    </StyledFlexbox>
  );
};

Cell.TextWrapper = React.memo(TextWrapper);
export default Cell;
