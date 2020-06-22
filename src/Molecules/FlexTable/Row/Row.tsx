import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { RowComponent, RowComponents } from './Row.types';
import { Box, Flexbox, Button, Icon } from '../../../index';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { getDensityPaddings } from '../shared/textUtils';
import { Density } from '../shared/shared.types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandItems, ExpandItem } from './ExpandItems';
import { ExpandCell } from '../Cell/ExpandCell';
import { COLUMN_ID_EXPAND } from '../shared/constants';

/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled(Flexbox).withConfig({
  shouldForwardProp: prop =>
    !['hideSeparator', 'expanded', 'separatorColor', 'density', 'hoverHighlight'].includes(prop),
})<{
  hideSeparator: boolean;
  expanded: boolean;
  separatorColor: ColorFn;
  hoverHighlight: boolean;
  density: Density;
}>`
  ${p =>
    !p.hideSeparator && !p.expanded ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : ''};
  padding-right: ${p => p.theme.spacing.unit(1)}px;
  padding-left: ${p => p.theme.spacing.unit(0.5)}px;
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

const Row: RowComponent & RowComponents = ({
  className,
  expanded,
  hoverHighlight = true,
  hideSeparator = false,
  separatorColor = theme => theme.color.divider,
  includeExpand = false,
  onExpandToggle,
  expandChildren,
  expandItems,
  children,
  ...htmlProps
}) => {
  const { density } = useFlexTable();
  const [expand, setExpand] = useState(expanded || false);

  useEffect(() => {
    if (!R.isNil(expanded)) {
      setExpand(expanded);
    }
  }, [expand, expanded]);

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
        {...htmlProps}
      >
        {children}
        {includeExpand && (
          <ExpandCell
            columnId={COLUMN_ID_EXPAND}
            expanded={expand}
            onClick={() => (onExpandToggle ? onExpandToggle(!expand) : setExpand(!expand))}
            disabled={!(expandChildren || expandItems)}
          />
        )}
      </StyledRow>

      {expand && (
        <StyledExpandedRow role="row" separatorColor={separatorColor}>
          {/* TODO should we rather have padding specified in ExpandItems? */}
          <Box px={5} pb={2} md={{ px: 5, pt: 5, pb: 0 }} role="cell">
            {expandItems && <ExpandItems items={expandItems} />}
            {expandChildren && (
              <Box pt={2} md={{ px: 5, pt: 0, pb: 5 }}>
                {expandChildren}
              </Box>
            )}
          </Box>
        </StyledExpandedRow>
      )}
    </>
  );
};

Row.ExpandItem = ExpandItem;
Row.ExpandItems = ExpandItems;

export default Row;
