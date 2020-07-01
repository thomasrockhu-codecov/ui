import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExpandProps, RowComponent, RowComponents } from './Row.types';
import { Box, Flexbox, Button, Icon, Media } from '../../..';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { getDensityPaddings } from '../shared/textUtils';
import { Density } from '../shared/shared.types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandItems, ExpandItem } from './ExpandItems';
import { ExpandCell } from '../Cell/ExpandCell';
import { COLUMN_ID_EXPAND, ICON_COLUMN_DEFAULT_FLEX_PROPS } from '../shared/constants';
import FlexTable from '../FlexTable';

const getScreenMedia = ({ xs, sm, md, lg, xl }) => {
  return [
    { size: 'xs', ...xs },
    { size: 'sm', ...sm },
    { size: 'md', ...md },
    { size: 'lg', ...lg },
    { size: 'xl', ...xl },
  ]
    .filter(media => Object.keys(media).length > 1)
    .map((_, index, arr) => {
      const sizesUpToNow = arr.slice(0, index + 1);
      const screenSizeProps = sizesUpToNow.reduce(
        (acc2, values) => ({
          ...acc2,
          ...values,
        }),
        {},
      );
      return screenSizeProps;
    });
};

const RenderForSizes = ({ xs, sm, md, lg, xl, Component, Container }) => {
  const propsPerMedia = getScreenMedia({ xs, sm, md, lg, xl });

  const MediaComponent = propsPerMedia.map(({ size, ...props }, index, arr) => {
    const nextSize = arr[index + 1] ? arr[index + 1].size : null;

    const mediaQuery = (t, currentSize) => {
      if (currentSize === 'xs' && nextSize) {
        return t.media.lessThan(t.breakpoints[nextSize]);
      }
      if (nextSize) {
        return t.media.between(t.breakpoints[currentSize], nextSize);
      }
      return t.media.greaterThan(t.breakpoints[currentSize]);
    };
    if (size === 'xs' && !nextSize) {
      return (
        <Container>
          <Component {...props} />
        </Container>
      );
    }
    return (
      <Media query={t => mediaQuery(t, size)} as={Container}>
        <Component {...props} />
      </Media>
    );
  });

  return <>{MediaComponent}</>;
};

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

export const ExpandButton: React.FC<{ expanded: boolean; onClick: () => void }> = ({
  expanded,
  onClick,
}) => (
  <Button variant="neutral" onClick={onClick} aria-expanded={expanded}>
    {expanded ? <Icon.ChevronUp /> : <Icon.ChevronDown />}
  </Button>
);

const ExpandElement: React.FC<
  ExpandProps & { isContent: boolean; setExpand: (expanded: boolean) => void }
> = ({ isContent, expanded = false, onExpandToggle, setExpand, disabled }) => {
  if (!isContent) {
    return (
      <FlexTable.Header
        columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
        {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
      />
    );
  }

  return (
    <ExpandCell
      columnId={COLUMN_ID_EXPAND}
      expanded={expanded}
      onClick={() => (onExpandToggle ? onExpandToggle(!expanded) : setExpand(!expanded))}
      disabled={disabled}
    />
  );
};

const ExpandRow = separatorColor => ({ children }) => (
  <StyledExpandedRow role="row" separatorColor={separatorColor}>
    {children}
  </StyledExpandedRow>
);

const ExpandArea = ({ expandChildren, expandItems, separatorColor }) => (
  <Box px={5} pb={2} md={{ px: 5, pt: 5, pb: 0 }} role="cell">
    {/* TODO should we rather have padding specified in ExpandItems? */}
    {expandItems && <ExpandItems items={expandItems} />}
    {expandChildren && (
      <Box pt={2} md={{ px: 5, pt: 0, pb: 5 }}>
        {expandChildren}
      </Box>
    )}
  </Box>
);

const Row: RowComponent & RowComponents = ({
  className,
  expanded = false,
  hoverHighlight = true,
  hideSeparator = false,
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

  const screenExpanded = getScreenMedia({
    xs: {
      expandChildren: expandChildrenXs,
      expandItems: expandItemsXs,
    },
    sm,
    md,
    lg,
    xl,
  });

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
            disabled={!(expandChildrenXs || expandItemsXs)}
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
          Component={
            <ExpandArea
              expandChildren={expandChildrenXs}
              expandItems={expandItemsXs}
              separatorColor={separatorColor}
            />
          }
          Container={ExpandRow(separatorColor)}
        />
      )}
    </>
  );
};

Row.ExpandItem = ExpandItem;
Row.ExpandItems = ExpandItems;

export default Row;
