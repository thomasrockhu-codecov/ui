import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RowComponent } from './Row.types';
import { Flexbox } from '../../..';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { getDensityPaddings } from '../shared/textUtils';
import { Density } from '../shared/shared.types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandItems, ExpandItem } from './components/ExpandItems';
import { ExpandElement, ExpandRow } from './components';
import { Theme } from '../../../theme/theme.types';
import { getStylesForSizes } from '../shared';

const getDensityStyles = ({ density }: { density: Density }) => `
  padding-top: ${getDensityPaddings(density)}px;
  padding-bottom: ${getDensityPaddings(density)}px;
`;

const getExpandableStyles = (
  p: { expandable: boolean; expanded: boolean; hideSeparator: boolean; separatorColor: ColorFn } & {
    theme: Theme;
  },
) => `
  padding-right: ${p.expandable ? p.theme.spacing.unit(2) : p.theme.spacing.unit(1)}px;
  padding-left: ${p.expandable ? p.theme.spacing.unit(1.5) : p.theme.spacing.unit(0.5)}px;

  border-left: ${p.theme.spacing.unit(0.5)}px solid ${
  p.expanded && p.expandable ? p.theme.color.cta : 'transparent'
};
   
 ${(() => {
   if (p.hideSeparator) {
     return '';
   }
   if (p.expandable && p.expanded) {
     return '';
   }
   return `border-bottom: 1px solid ${p.separatorColor(p.theme)};`;
 })()}
   
  & > * {
    &:first-child {
      padding-left: 0;
    }

    &:nth-last-child(${p.expandable ? 1 : 2}) {
      padding-right: 0;
    }
  }
`;

type ScreenSizeConfigurableProps = { density: Density; expandable: boolean };

type StyledRowProps = {
  $hideSeparator: boolean;
  $expanded: boolean;
  $separatorColor: ColorFn;
  $hoverHighlight: boolean;
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};
/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled(Flexbox)<StyledRowProps>`
  background: ${(p) => p.theme.color.tableRowBackground};

  ${(p) =>
    p.$hoverHighlight &&
    !p.$expanded &&
    `&:hover {
      background: ${p.theme.color.tableRowHover};
    }`}

  margin-right: 0;
  margin-left: 0;

  ${getStylesForSizes<
    {
      expanded: StyledRowProps['$expanded'];
      hideSeparator: StyledRowProps['$hideSeparator'];
      separatorColor: StyledRowProps['$separatorColor'];
    },
    ScreenSizeConfigurableProps
  >(
    (p: StyledRowProps) => ({
      expanded: p.$expanded,
      hideSeparator: p.$hideSeparator,
      separatorColor: p.$separatorColor,
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      density: getDensityStyles,
      expandable: getExpandableStyles,
    },
  )}
`;

const Row: RowComponent = ({
  className,
  expanded,
  initiallyExpanded = false,
  hoverHighlight = true,
  hideSeparator = false,
  rowType = 'content',
  separatorColor = (theme) => theme.color.divider,
  onExpandToggle,
  expandChildren,
  expandItems,
  children,
  ...htmlProps
}) => {
  const { xs: xsRow, sm: smRow, md: mdRow, lg: lgRow, xl: xlRow } = useFlexTable<
    'density' | 'expandable'
  >('density', 'expandable');
  const {
    xs: xsFlexbox,
    sm: smFlexbox,
    md: mdFlexbox,
    lg: lgFlexbox,
    xl: xlFlexbox,
  } = useFlexTable<'columnDistance'>('columnDistance');

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
  }, [controlledExpand, expanded]);

  return (
    <>
      <StyledRow
        container
        role="row"
        className={className}
        alignItems="center"
        $expanded={!!expand}
        $hideSeparator={hideSeparator}
        $hoverHighlight={hoverHighlight}
        $separatorColor={separatorColor}
        $xs={xsRow}
        $sm={smRow}
        $md={mdRow}
        $lg={lgRow}
        $xl={xlRow}
        gutter={xsFlexbox?.columnDistance}
        sm={{ gutter: smFlexbox?.columnDistance }}
        md={{ gutter: mdFlexbox?.columnDistance }}
        lg={{ gutter: lgFlexbox?.columnDistance }}
        xl={{ gutter: xlFlexbox?.columnDistance }}
        {...htmlProps}
      >
        {children}
        <ExpandElement
          rowType={rowType}
          expanded={expand}
          onExpandToggle={onExpandToggleClick}
          disabled={!expandChildren && !expandItems}
          setExpand={setExpand}
        />
      </StyledRow>
      {expand && (
        <ExpandRow
          expandItems={expandItems}
          expandChildren={expandChildren}
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
