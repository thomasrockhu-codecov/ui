import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RowComponent, RowComponents } from './Row.types';
import { Flexbox } from '../../..';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { getDensityPaddings } from '../shared/textUtils';
import { Density } from '../shared/shared.types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandItems, ExpandItem } from './components/ExpandItems';
import { RenderForSizes } from '../shared';
import { ExpandElement, ExpandArea } from './components';

/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled(Flexbox).withConfig({
  shouldForwardProp: prop =>
    ![
      'hideSeparator',
      'expanded',
      'separatorColor',
      'density',
      'hoverHighlight',
      'expandable',
    ].includes(prop),
})<{
  hideSeparator: boolean;
  expanded: boolean;
  separatorColor: ColorFn;
  hoverHighlight: boolean;
  density: Density;
  expandable: boolean;
}>`
  ${p =>
    !p.hideSeparator && !p.expanded ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : ''};
  padding-right: ${p => (p.expandable ? p.theme.spacing.unit(2) : p.theme.spacing.unit(1))}px;
  padding-left: ${p => (p.expandable ? p.theme.spacing.unit(1.5) : p.theme.spacing.unit(0.5))}px;
  border-left: ${p => p.theme.spacing.unit(0.5)}px solid
    ${p => (p.expanded ? p.theme.color.cta : 'transparent')};
  ${p =>
    p.hoverHighlight &&
    !p.expanded &&
    `&:hover {
        background: ${p.theme.color.tableRowHover};
      }`};

  padding-top: ${p => getDensityPaddings(p.density)}px;
  padding-bottom: ${p => getDensityPaddings(p.density)}px;
`;

const StyledExpandedRow = styled('div').withConfig({
  shouldForwardProp: prop => !['separatorColor'].includes(prop),
})<{ separatorColor: ColorFn }>`
  border-left: ${p => p.theme.spacing.unit(0.5)}px solid ${p => p.theme.color.cta};
  border-bottom: 1px solid ${p => p.separatorColor(p.theme)};
`;

const Row: RowComponent & RowComponents = ({
  className,
  expanded = false,
  hoverHighlight = true,
  hideSeparator = false,
  // If false means that it's a header
  isContent = true,
  separatorColor = theme => theme.color.divider,
  onExpandToggle,
  expandChildren: expandChildrenXs,
  expandItems: expandItemsXs,
  children,
  sm,
  md,
  lg,
  xl,
  ...htmlProps
}) => {
  const { density, expandable } = useFlexTable();
  const [expand, setExpand] = useState(expanded);

  useEffect(() => {
    setExpand(expanded);
  }, [expanded]);

  return (
    <>
      <StyledRow
        container
        alignItems="center"
        hoverHighlight={hoverHighlight}
        className={className}
        hideSeparator={hideSeparator}
        role="row"
        expanded={expand}
        separatorColor={separatorColor}
        density={density}
        expandable={expandable}
        {...htmlProps}
      >
        {children}
        {expandable && (
          <ExpandElement
            isContent={isContent}
            expanded={expand}
            onExpandToggle={onExpandToggle}
            disabled={!expandChildrenXs && !expandItemsXs}
            setExpand={setExpand}
          />
        )}
      </StyledRow>

      {expand && (
        <RenderForSizes
          xs={{
            expandItems: expandItemsXs,
            expandChildren: expandChildrenXs,
          }}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          Component={({ expandChildren, expandItems }) => (
            <ExpandArea expandItems={expandItems} expandChildren={expandChildren} />
          )}
          Container={({ children: containerChildren }) => (
            <StyledExpandedRow role="row" separatorColor={separatorColor}>
              {containerChildren}
            </StyledExpandedRow>
          )}
        />
      )}
    </>
  );
};

Row.ExpandItem = ExpandItem;
Row.ExpandItems = ExpandItems;

export default Row;
