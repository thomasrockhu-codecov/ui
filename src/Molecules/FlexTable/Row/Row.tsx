import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ExpandRowComponent, RowComponent } from './Row.types';
import { Flexbox } from '../../..';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { getDensityPaddings } from '../shared/textUtils';
import { Density, MediaRelatedProps } from '../shared/shared.types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandItems, ExpandItem } from './components/ExpandItems';
import { ExpandArea, ExpandElement } from './components';
import { Theme } from '../../../theme/theme.types';

const getDensityStyles = (density: Density) => `
  padding-top: ${getDensityPaddings(density)}px;
  padding-bottom: ${getDensityPaddings(density)}px;
`;

const getExpandableStyles = (p: { expandable: boolean; expanded: boolean } & { theme: Theme }) => `
  padding-right: ${p.expandable ? p.theme.spacing.unit(2) : p.theme.spacing.unit(1)}px;
  padding-left: ${p.expandable ? p.theme.spacing.unit(1.5) : p.theme.spacing.unit(0.5)}px;

  border-left: ${p.theme.spacing.unit(0.5)}px solid ${
  p.expanded && p.expandable ? p.theme.color.cta : 'transparent'
};
   
  & > * {
    &:first-child {
      padding-left: 0;
    }

    &:nth-last-child(${p.expandable ? 1 : 2}) {
      padding-right: 0;
    }
  }
`;

type StyledRowProps = {
  $hideSeparator: boolean;
  $expanded: boolean;
  $separatorColor: ColorFn;
  $hoverHighlight: boolean;
  $xs: any;
  $sm: any;
  $md: any;
  $lg: any;
  $xl: any;
} & MediaRelatedProps<{ density: Density; expandable: boolean; columnDistance: number }>;

const getStyles = (size: string, p: StyledRowProps & { theme: Theme }) => {
  return `
    ${p[`$${size}`].density ? getDensityStyles(p[`$${size}`].density) : ''}
    ${
      p[`$${size}`].expandable
        ? getExpandableStyles({ expanded: p.$expanded, theme: p.theme, ...p[`$${size}`] })
        : ''
    }
  `;
};

const getStylesForSize = (size: string) => css<StyledRowProps>`
  ${(p) => {
    const styles = getStyles(size, p);
    if (size !== 'xs') {
      return `${p.theme.media.greaterThan(p.theme.breakpoints[size])} { ${styles} }`;
    }
    return styles;
  }}
`;

/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled(Flexbox)<StyledRowProps>`
  background: ${(p) => p.theme.color.tableRowBackground};
  ${(p) =>
    !p.$hideSeparator && !p.$expanded
      ? `border-bottom: 1px solid ${p.$separatorColor(p.theme)};`
      : ''}

  ${(p) =>
    p.$hoverHighlight &&
    !p.$expanded &&
    `&:hover {
      background: ${p.theme.color.tableRowHover};
    }`}

  margin-right: 0;
  margin-left: 0;

  ${(p) => (p.$xs ? getStylesForSize('xs') : '')}
  ${(p) => (p.$sm ? getStylesForSize('sm') : '')}
  ${(p) =>
    p.$md ? getStylesForSize('md') : ''}
  ${(p) => (p.$lg ? getStylesForSize('lg') : '')}
  ${(p) =>
    p.$xl ? getStylesForSize('xl') : ''}
`;

const StyledExpandedRow = styled('div').withConfig({
  shouldForwardProp: (prop) => !['separatorColor'].includes(prop),
})<{ separatorColor: ColorFn }>`
  border-left: ${(p) => p.theme.spacing.unit(0.5)}px solid ${(p) => p.theme.color.cta};
  border-bottom: 1px solid ${(p) => p.separatorColor(p.theme)};
`;

const ExpandRow: ExpandRowComponent = ({
  expandItems,
  expandChildren,
  sm,
  md,
  lg,
  xl,
  separatorColor = (theme) => theme.color.divider,
  ...htmlProps
}) => (
  <StyledExpandedRow role="row" separatorColor={separatorColor} {...htmlProps}>
    <ExpandArea
      expandItems={expandItems}
      expandChildren={expandChildren}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    />
  </StyledExpandedRow>
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
  expandChildren,
  expandItems,
  children,
  sm: smExpandProps,
  md: mdExpandProps,
  lg: lgExpandProps,
  xl: xlExpandProps,
  ...htmlProps
}) => {
  const { xs: xsRow, sm: smRow, md: mdRow, lg: lgRow, xl: xlRow } = useFlexTable(
    'density',
    'expandable',
  );
  const {
    xs: xsFlexbox,
    sm: smFlexbox,
    md: mdFlexbox,
    lg: lgFlexbox,
    xl: xlFlexbox,
  } = useFlexTable('columnDistance');

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
        $expanded={!!expand}
        $hideSeparator={hideSeparator}
        $hoverHighlight={hoverHighlight}
        $separatorColor={separatorColor}
        $xs={xsRow}
        $sm={smRow}
        $md={mdRow}
        $lg={lgRow}
        $xl={xlRow}
        container
        role="row"
        className={className}
        alignItems="center"
        gutter={xsFlexbox?.columnDistance}
        sm={{ gutter: smFlexbox?.columnDistance }}
        md={{ gutter: mdFlexbox?.columnDistance }}
        lg={{ gutter: lgFlexbox?.columnDistance }}
        xl={{ gutter: xlFlexbox?.columnDistance }}
        {...htmlProps}
      >
        {children}
        <ExpandElement
          expandable={xsRow?.expandable}
          sm={smRow}
          md={mdRow}
          lg={lgRow}
          xl={xlRow}
          isContent={isContent}
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
          sm={smExpandProps}
          md={mdExpandProps}
          lg={lgExpandProps}
          xl={xlExpandProps}
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
