import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExpandRowComponent, RowComponent } from './Row.types';
import { Flexbox } from '../../..';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { getDensityPaddings } from '../shared/textUtils';
import { Density } from '../shared/shared.types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandItems, ExpandItem } from './components/ExpandItems';
import { RenderForSizes } from '../shared/RenderForSizes2';
import { ExpandElement, ExpandArea } from './components';

/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled(Flexbox).withConfig({
  shouldForwardProp: (prop) =>
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
  background: ${(p) => p.theme.color.tableRowBackground};
  ${(p) =>
    !p.hideSeparator && !p.expanded ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : ''};

  padding-right: ${(p) => (p.expandable ? p.theme.spacing.unit(2) : p.theme.spacing.unit(1))}px;
  padding-left: ${(p) => (p.expandable ? p.theme.spacing.unit(1.5) : p.theme.spacing.unit(0.5))}px;

  border-left: ${(p) => p.theme.spacing.unit(0.5)}px solid
    ${(p) => (p.expanded && p.expandable ? p.theme.color.cta : 'transparent')};

  ${(p) =>
    p.hoverHighlight &&
    !p.expanded &&
    `&:hover {
      background: ${p.theme.color.tableRowHover};
    }`};

  padding-top: ${(p) => getDensityPaddings(p.density)}px;
  padding-bottom: ${(p) => getDensityPaddings(p.density)}px;

  margin-right: 0;
  margin-left: 0;

  & > * {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;

const StyledExpandedRow = styled('div').withConfig({
  shouldForwardProp: (prop) => !['separatorColor'].includes(prop),
})<{ separatorColor: ColorFn }>`
  border-left: ${(p) => p.theme.spacing.unit(0.5)}px solid ${(p) => p.theme.color.cta};
  border-bottom: 1px solid ${(p) => p.separatorColor(p.theme)};
`;

const ExpandComponent = ({ expandChildren, expandItems }) => {
  if (expandItems && expandItems.length === 0 && !expandChildren) {
    return null;
  }
  return <ExpandArea expandItems={expandItems} expandChildren={expandChildren} />;
};

const ExpandRow: ExpandRowComponent = ({
  expandItems: expandItemsXs,
  expandChildren: expandChildrenXs,
  sm,
  md,
  lg,
  xl,
  separatorColor = (theme) => theme.color.divider,
  ...htmlProps
}) => (
  <RenderForSizes
    xs={{
      expandItems: expandItemsXs,
      expandChildren: expandChildrenXs,
    }}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    containerProps={{ role: 'row', separatorColor, htmlProps }}
    Container={StyledExpandedRow}
    // @ts-ignore
    Component={ExpandComponent}
    componentProps={{}}
  />
);

const Container = ({
  className,
  density,
  columnDistance,
  expandable,
  children: component,
  hoverHighlight,
  hideSeparator,
  expanded,
  separatorColor,
  htmlProps,
}) => (
  <StyledRow
    className={className}
    container
    alignItems="center"
    hoverHighlight={hoverHighlight}
    hideSeparator={hideSeparator}
    role="row"
    // TODO: Remove type assertion when typescript is able to assert undefined from constants, in this case controlledExpand
    expanded={!!expanded}
    separatorColor={separatorColor}
    density={density}
    expandable={expandable}
    gutter={columnDistance}
    {...htmlProps}
  >
    {component}
  </StyledRow>
);

const Component = ({
  expandable,
  children,
  isContent,
  expanded,
  onExpandToggle,
  expandChildrenXs,
  setExpand,
  expandItemsXs,
}) => (
  <>
    {children}
    {expandable && (
      <ExpandElement
        isContent={isContent}
        expanded={expanded}
        onExpandToggle={onExpandToggle}
        disabled={!expandChildrenXs && !expandItemsXs}
        setExpand={setExpand}
      />
    )}
  </>
);

const Row: RowComponent = ({
  className,
  expanded,
  initiallyExpanded = false,
  hoverHighlight = true,
  hideSeparator = false,
  // If false means that it's a header
  isContent = true,
  separatorColor = (theme) => theme.color.divider,
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
  const {
    density: xsDensity,
    columnDistance: xsColumnDistance,
    expandable: xsExpandable,
    sm: smTable,
    md: mdTable,
    lg: lgTable,
    xl: xlTable,
  } = useFlexTable();
  const controlledExpand = expanded !== undefined;
  const [expand, setExpand] = useState(controlledExpand ? expanded : initiallyExpanded);

  const onExpandToggleClick = React.useCallback(() => {
    if (onExpandToggle) {
      onExpandToggle(!expand);
    }
    if (!controlledExpand) {
      setExpand(!expand);
    }
  }, [expand, controlledExpand, onExpandToggle]);

  useEffect(() => {
    if (controlledExpand) {
      setExpand(expanded);
    }
  }, [expanded, controlledExpand]);

  return (
    <>
      <RenderForSizes
        xs={{ density: xsDensity, expandable: xsExpandable, columnDistance: xsColumnDistance }}
        sm={smTable}
        md={mdTable}
        lg={lgTable}
        xl={xlTable}
        // @ts-ignore
        Container={Container}
        containerProps={{
          className,
          container: true,
          alignItems: 'center',
          hoverHighlight,
          hideSeparator,
          role: 'row',
          expanded: !!expand,
          separatorColor,
          ...htmlProps,
        }}
        // @ts-ignore
        Component={Component}
        componentProps={{
          isContent,
          children,
          expanded: expand,
          onExpandToggle: onExpandToggleClick,
          expandChildrenXs,
          expandItemsXs,
          setExpand,
        }}
      />

      {expand && (
        <ExpandRow
          expandItems={expandItemsXs}
          expandChildren={expandChildrenXs}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          separatorColor={separatorColor}
        />
      )}
    </>
  );
};

Row.ExpandItem = ExpandItem;
Row.ExpandItems = ExpandItems;
Row.ExpandRow = ExpandRow;

export default Row;
