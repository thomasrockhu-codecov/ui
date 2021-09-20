import React, { useContext } from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumnData, useFittedColumnWidth, useFlexCellProps } from '../shared/ColumnProvider';
import { CellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';
import { Density } from '../shared/shared.types';
import { getDensityPaddings } from '../shared/textUtils';
import getStylesForSizes from '../shared/getStylesForSizes';
import { useFlexTable } from '../shared/FlexTableProvider';
import { FlexTableContext } from '../shared/FlexTableProvider/FlexTableProvider';

type ScreenSizeConfigurableProps = { density: Density };
type StyledFlexboxProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};

// TODO: using '!important' here because Flexbox (used in Row) sets padding-top: 0 on its children, investigate how / if this can be solved in a better way.
const getDensityStyles = ({ density }: { density: Density }) => `
  padding-top: ${getDensityPaddings(density)}px !important;
  padding-bottom: ${getDensityPaddings(density)}px;
`;

const StyledFlexbox = styled(Flexbox)<StyledFlexboxProps>`
  overflow: hidden;
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledFlexboxProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      density: getDensityStyles,
    },
  )}
`;

const Cell: CellComponent = (props) => {
  const { children, columnId, className } = props;
  const flexProps = useFlexCellProps(props);
  const { xs, sm, md, lg, xl } = useFlexTable<'density'>('density');
  const [columnData, columnDispatch] = useColumnData(columnId);
  const contextData = useContext(FlexTableContext);
  if (contextData === undefined) {
    throw Error('No FlexTable provider, FlexTable rows can only be children of a FlexTable');
  }
  const { columnWidthProps } = contextData;
  const columnWidth = columnWidthProps?.[columnId];
  const fitContent = !!columnWidth?.fitContent;

  const measureContainer = useFittedColumnWidth(columnDispatch, fitContent);

  const columnFlexWidth = `0 1 ${columnData?.width}px`;
  return (
    <>
      <StyledFlexbox
        className={className}
        role="cell"
        $xs={xs}
        $sm={sm}
        $md={md}
        $lg={lg}
        $xl={xl}
        {...flexProps}
        {...(fitContent && { flex: columnFlexWidth })}
        ref={measureContainer}
      >
        {isElement(children) && children}
        {isFunction(children)
          ? children({ columnId })
          : !isElement(children) && (
              <TextWrapper truncate={!columnData?.fitContent}>{children}</TextWrapper>
            )}
      </StyledFlexbox>
    </>
  );
};

Cell.TextWrapper = React.memo(TextWrapper);
export default Cell;
