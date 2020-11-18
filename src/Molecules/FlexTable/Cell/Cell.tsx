import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useFlexCellProps } from '../shared/ColumnProvider';
import { CellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const Cell: CellComponent = (props) => {
  const { children, columnId, className } = props;
  const flexProps = useFlexCellProps(props);

  return (
    <StyledFlexbox className={className} role="cell" {...flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ columnId })
        : // Truncate? exists on CellComponent through TextWrapper props
          !isElement(children) && <TextWrapper>{children}</TextWrapper>}
    </StyledFlexbox>
  );
};

Cell.TextWrapper = React.memo(TextWrapper);
export default Cell;
