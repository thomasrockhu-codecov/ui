import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Props, SortOrder } from './Header.types';
import { isElement } from '../../../common/utils';
import { Flexbox, Icon } from '../../..';
import { TextWrapper } from './TextWrapper';

const StyledIconChevronDown = styled(Icon.ChevronDown)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const StyledIconThinArrow = styled(Icon.ThinArrow)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const getSortOrderIcon = (sortable: boolean, sortOrder: SortOrder) => {
  if (!sortable) {
    return null;
  }

  if (sortOrder === 'descending') {
    return <StyledIconThinArrow direction="down" size={2} color={t => t.color.text} />;
  }

  if (sortOrder === 'ascending') {
    return <StyledIconThinArrow direction="up" size={2} color={t => t.color.text} />;
  }

  return <StyledIconChevronDown size={2} color={t => t.color.label} />;
};

export const Header: React.FC<Props> = ({
  className,
  container = true,
  flex = '1',
  grow,
  item = true,
  order,
  shrink,
  wrap = 'nowrap',
  sortable = false,
  fontSize = 'm',
  density = 'm',
  sortOrder = undefined,
  children,
  ...htmlProps
}) => {
  const ariaSorted = sortable ? { 'aria-sort': sortOrder || 'none' } : {};
  return (
    <Flexbox
      container={container}
      flex={flex}
      grow={grow}
      item={item}
      order={order}
      shrink={shrink}
      wrap={wrap}
      className={className}
      role="columnheader"
      alignItems="center"
      {...ariaSorted}
      {...htmlProps}
    >
      {isElement(children) ? (
        <>{children}</>
      ) : (
        <TextWrapper fontSize={fontSize} density={density} sorted={!R.isNil(sortOrder)}>
          {children}
        </TextWrapper>
      )}
      {getSortOrderIcon(sortable, sortOrder)}
    </Flexbox>
  );
};
