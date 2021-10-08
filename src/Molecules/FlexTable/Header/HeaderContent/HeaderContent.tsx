import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props, UIProps } from './HeaderContent.types';
import { SORT_ORDER_NONE } from '../../shared/constants';
import { SortIcon } from './SortIcon';
import { SortButton } from './SortButton';
import { Flexbox } from '../../../..';
import { CellInlineContainer, HeaderText } from '../../shared';

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

export const HeaderContent: React.FC<Props & UIProps> = ({
  sortable,
  sortOrder,
  onSortClick,
  children,
}) => {
  if (!sortable || sortOrder === null) {
    return <HeaderText sorted={false}>{children}</HeaderText>;
  }

  return (
    <SortButton onClick={onSortClick}>
      <StyledFlexboxContainer container>
        <CellInlineContainer item>
          <HeaderText sorted={!R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE}>
            {children}
          </HeaderText>
        </CellInlineContainer>
        <Flexbox item>
          <SortIcon sortOrder={sortOrder} />
        </Flexbox>
      </StyledFlexboxContainer>
    </SortButton>
  );
};
