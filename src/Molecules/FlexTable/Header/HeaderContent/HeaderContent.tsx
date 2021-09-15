import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props, UIProps } from './HeaderContent.types';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_NONE } from '../../shared/constants';
import { SortIcon } from './SortIcon';
import { SortButton } from './SortButton';
import { Flexbox } from '../../../..';
import { CellInlineContainer } from '../../shared';
import { useColumnData } from '../../shared/ColumnProvider';

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

export const HeaderContent: React.FC<Props & UIProps> = ({
  sortable,
  sortOrder,
  onSortClick,
  children,
  measureFullWidth,
  columnId,
}) => {
  const [columnData] = useColumnData(columnId);
  if (!sortable || sortOrder === null) {
    return (
      <TextWrapper
        truncate={!columnData?.fitContent}
        sorted={false}
        measureFullWidth={measureFullWidth}
      >
        {children}
      </TextWrapper>
    );
  }

  return (
    <SortButton onClick={onSortClick}>
      <StyledFlexboxContainer container>
        <CellInlineContainer item>
          <TextWrapper
            truncate={!columnData?.fitContent}
            sorted={!R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE}
            measureFullWidth={measureFullWidth}
          >
            {children}
          </TextWrapper>
        </CellInlineContainer>
        <Flexbox item>
          <SortIcon sortOrder={sortOrder} />
        </Flexbox>
      </StyledFlexboxContainer>
    </SortButton>
  );
};
