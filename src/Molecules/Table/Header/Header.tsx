import React from 'react';
import styled from 'styled-components';
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

  if (!sortOrder) {
    return <StyledIconChevronDown size={2} color={t => t.color.label} />;
  }

  if (sortOrder === 'ascending') {
    return <StyledIconThinArrow direction="up" size={2} />;
  }

  return <StyledIconThinArrow direction="down" size={2} />;
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
      {...htmlProps}
      alignItems="center"
    >
      {isElement(children) ? (
        <>{children}</>
      ) : (
        <TextWrapper fontSize={fontSize} density={density}>
          {children}
        </TextWrapper>
      )}
      {getSortOrderIcon(sortable, sortOrder)}
    </Flexbox>
  );
};
