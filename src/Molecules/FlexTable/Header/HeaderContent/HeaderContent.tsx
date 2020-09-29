import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props, UIProps } from './HeaderContent.types';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_NONE } from '../../shared/constants';
import { SortIcon } from './SortIcon';
import { SortButton } from './SortButton';
import { useFlexTable } from '../../shared/FlexTableProvider';
import { Flexbox } from '../../../..';
import { CellInlineContainer, RenderForSizes } from '../../shared';

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

export const HeaderContent: React.FC<Props & UIProps> = ({
  sortable,
  sortOrder,
  onSortClick,
  children,
}) => {
  const {
    fontSize: xsFontSize,
    sm: smTable,
    md: mdTable,
    lg: lgTable,
    xl: xlTable,
  } = useFlexTable();

  if (!sortable || sortOrder === null) {
    return (
      <RenderForSizes
        xs={{ fontSize: xsFontSize }}
        sm={smTable}
        md={mdTable}
        lg={lgTable}
        xl={xlTable}
        Container={({ fontSize, children: component, className: mediaClassName }) => (
          <TextWrapper className={mediaClassName} fontSize={fontSize} sorted={false}>
            {component}
          </TextWrapper>
        )}
        Component={() => children}
      />
    );
  }

  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize }}
      sm={smTable}
      md={mdTable}
      lg={lgTable}
      xl={xlTable}
      Container={({ children: component, className: mediaClassName }) => (
        <SortButton className={mediaClassName} onClick={onSortClick}>
          {component}
        </SortButton>
      )}
      Component={({ fontSize }) => (
        <StyledFlexboxContainer container>
          <CellInlineContainer item>
            <TextWrapper
              fontSize={fontSize}
              sorted={!R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE}
            >
              {children}
            </TextWrapper>
          </CellInlineContainer>
          <Flexbox item>
            <SortIcon sortOrder={sortOrder} />
          </Flexbox>
        </StyledFlexboxContainer>
      )}
    />
  );
};
