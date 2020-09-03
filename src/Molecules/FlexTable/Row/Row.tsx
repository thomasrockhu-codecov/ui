import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {ExpandRowComponent, RowComponent} from './Row.types';
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

const ExpandRow: ExpandRowComponent = ({ expandItems: expandItemsXs, expandChildren: expandChildrenXs, sm, md, lg, xl, separatorColor }) => (
  <RenderForSizes
    xs={{
      expandItems: expandItemsXs,
      expandChildren: expandChildrenXs,
    }}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    Container={({ children: component, className: mediaClassName }) => (
      <StyledExpandedRow role="row" separatorColor={separatorColor} className={mediaClassName}>
        {component}
      </StyledExpandedRow>
    )}
    Component={({ expandChildren, expandItems }) => {
      if (expandItems && expandItems.length === 0 && !expandChildren) {
        return null;
      }
      return <ExpandArea expandItems={expandItems} expandChildren={expandChildren} />;
    }}
  />
);

const Row: RowComponent = ({
  className,
  expanded,
  initiallyExpanded = false,
  hoverHighlight = true,
  hideSeparator = false,
  // If false means that it's a header
  isContent = true,
  separatorColor = (theme: any) => theme.color.divider,
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

  const onExpandToggleClick = () => {
    if (onExpandToggle) {
      onExpandToggle(!expand);
    }
    if (!controlledExpand) {
      setExpand(!expand);
    }
  };

  useEffect(() => {
    if (controlledExpand) {
      setExpand(expanded);
    }
  }, [expanded]);

  return (
    <>
      <RenderForSizes
        xs={{ density: xsDensity, expandable: xsExpandable, columnDistance: xsColumnDistance }}
        sm={smTable}
        md={mdTable}
        lg={lgTable}
        xl={xlTable}
        Container={({
          density,
          columnDistance,
          expandable,
          children: component,
          className: mediaClassName,
        }) => (
          <StyledRow
            className={mediaClassName ? `${className} ${mediaClassName}` : className}
            container
            alignItems="center"
            hoverHighlight={hoverHighlight}
            hideSeparator={hideSeparator}
            role="row"
            // TODO: Remove type assertion when typescript is able to assert undefined from constants, in this case controlledExpand
            expanded={expand as boolean}
            separatorColor={separatorColor}
            density={density}
            expandable={expandable}
            gutter={columnDistance}
            {...htmlProps}
          >
            {component}
          </StyledRow>
        )}
        Component={({ expandable }) => (
          <>
            {children}
            {expandable && (
              <ExpandElement
                isContent={isContent}
                expanded={expand}
                onExpandToggle={onExpandToggleClick}
                disabled={!expandChildrenXs && !expandItemsXs}
                setExpand={setExpand}
              />
            )}
          </>
        )}
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
