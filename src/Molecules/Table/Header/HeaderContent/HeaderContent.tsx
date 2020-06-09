import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props, UIProps } from './HeaderContent.types';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_NONE } from '../../shared/constants';
import { SortIcon } from './SortIcon';

const StyledLink = styled.a<{ sortable?: Props['sortable'] }>`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

export const HeaderContent: React.FC<Props & UIProps> = ({
  sortable,
  fontSize,
  density,
  sortOrder,
  onSortClick,
  children,
}) => {
  if (!sortable || sortOrder === null) {
    return (
      <TextWrapper fontSize={fontSize} density={density} sorted={false}>
        {children}
      </TextWrapper>
    );
  }

  return (
    <StyledLink
      href="#"
      role="button"
      onClick={e => {
        e.preventDefault();
        onSortClick();
      }}
    >
      <TextWrapper
        fontSize={fontSize}
        density={density}
        sorted={!R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE}
      >
        {children}
      </TextWrapper>
      <SortIcon sortOrder={sortOrder} />
    </StyledLink>
  );
};
